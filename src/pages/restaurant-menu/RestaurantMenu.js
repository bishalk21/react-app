import React, { useEffect, useState } from "react";
import ShimmerUI from "../../components/shimmer-ui/ShimmerUI";
import { Link, useParams } from "react-router-dom";
import useRestaurantMenu from "../../hooks/useRestaurantMenu";
import { MEAL_IMG_URL } from "../../utils/constant";
import RestaurantCategory from "../../components/restaurant-category/RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [showIndex, setShowIndex] = useState(-1);

  const handleFilterClick = (filterName) => {
    if (filterName === "all") {
      setFilteredResList(
        resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
          ?.card?.itemCards
      );
    } else {
      const filteredItems =
        resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.filter(
          (item) => item.card.info.type.toLowerCase() === filterName
        );
      setFilteredResList(filteredItems);
    }
  };

  const handleSearchClick = () => {
    const filteredItems =
      resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.filter(
        (item) =>
          item.card.info.name.toLowerCase().includes(searchInput.toLowerCase())
      );
    setFilteredResList(filteredItems);
  };

  useEffect(() => {
    // Set the initial state of filteredResList to itemCards
    const itemCards =
      resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards;
    setFilteredResList(itemCards);
  }, [resMenu]);

  if (resMenu === null) return <ShimmerUI />;

  const { name, cuisines, costForTwoMessage } =
    resMenu?.cards[0]?.card?.card?.info;

  const categories =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // const { itemCards } =
  //   resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // console.log(itemCards);

  // useState(() => {
  //   setFilteredResList(itemCards);
  // }, [itemCards]);

  // useEffect(() => {
  //   // Filter the menu items based on the search input
  //   const filteredItems = itemCards.filter((item) =>
  //     item.card.info.name.toLowerCase().includes(searchInput.toLowerCase())
  //   );
  //   setFilteredResList(filteredItems);
  // }, [searchInput, resMenu]);

  return (
    <div className="flex flex-col">
      <div className="mr-3 ml-3 mb-2 flex flex-col justify-start p-4 max-[478px]:text-sm border-b border-solid border-[lightgray]">
        <div className="mb-6 flex justify-between gap-1">
          <h1 className="font-semibold">{name}</h1>
          <p className="font-normal">{costForTwoMessage}</p>
        </div>
        <div className="flex justify-between gap-1">
          <p>{cuisines.join(", ")}</p>
          <Link
            to="contact"
            className="btn font-medium uppercase text-base text-[lightgray] bg-[#af6e4d] relative cursor-pointer z-10 inline-block max-[478px]:text-sm"
          >
            Reserve
          </Link>
        </div>
      </div>
      {categories?.length === 0 ? (
        <MealShimmer />
      ) : (
        <>
          {categories.map((category, index) => {
            return (
              <RestaurantCategory
                key={category?.card?.card?.title}
                data={category?.card?.card}
                showItems={index === showIndex ? true : false}
                setShowIndex={() => {
                  setShowIndex((prevIndex) =>
                    prevIndex === index ? -1 : index
                  );
                }}
              />
            );
          })}
        </>
      )}

      <section className="light-body hidden pt-4 pb-4 pr-10 pl-10" id="menus">
        <div className="container">
          <div className="flex items-center justify-between">
            <div id="menus-title">
              <h2 className="text-lg font-semibold">Our Meals</h2>
            </div>
            <div className="relative">
              <input
                onChange={(e) => {
                  setSearchInput(e.target.value);
                }}
                value={searchInput}
                type="text"
                id="myInput"
                placeholder="Search by name or recipe"
                title="Type in a name"
              />
              <i className="fas fa-search" onClick={handleSearchClick}></i>
            </div>
          </div>
          <div className="items">
            <span
              className="item active"
              data-name="all"
              onClick={() => handleFilterClick("all")}
            >
              All
            </span>
            <span
              className="item"
              data-name="breakfast"
              onClick={() => handleFilterClick("breakfast")}
            >
              Breakfast
            </span>
            <span
              className="item"
              data-name="lunch"
              onClick={() => handleFilterClick("lunch")}
            >
              Lunch
            </span>
            <span
              className="item"
              data-name="dinner"
              onClick={() => handleFilterClick("dinner")}
            >
              Dinner
            </span>
            <span
              className="item"
              data-name="drinks"
              onClick={() => handleFilterClick("drinks")}
            >
              Drinks
            </span>
            <span
              className="item"
              data-name="desserts"
              onClick={() => handleFilterClick("desserts")}
            >
              Desserts
            </span>
            <span
              className="item"
              data-name="snacks"
              onClick={() => handleFilterClick("snacks")}
            >
              Snacks
            </span>
          </div>
          <div className="menu-cards" id="menu-cards">
            {filteredResList && filteredResList.length > 0 ? (
              filteredResList.map((item) => (
                <li
                  id="meal"
                  data-name={item.card.info.type}
                  key={item.card.info.id}
                >
                  <span>
                    <div className="menu-card">
                      <div className="meal-image">
                        <img
                          src={MEAL_IMG_URL + item.card.info.imageId}
                          alt=""
                        />
                      </div>
                      <div className="meal-content">
                        <div className="meal-content-top">
                          <div className="meal-title-content">
                            <h2 className="meal-title">
                              {item.card.info.name}
                            </h2>
                            <span className="meal-price">
                              ${" "}
                              {item.card.info.defaultPrice / 80 ||
                                item.card.info.price / 80}
                            </span>
                          </div>
                          <div className="meal-review">
                            <div className="meal-star">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star-half-alt"></i>
                            </div>
                            <div className="meal-review-text">
                              <span>34 reviews</span>
                            </div>
                          </div>
                        </div>
                        <div className="meal-content-bottom">
                          {item.card.info.description}
                        </div>
                      </div>
                    </div>
                  </span>
                </li>
              ))
            ) : (
              <p>No items found</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RestaurantMenu;
