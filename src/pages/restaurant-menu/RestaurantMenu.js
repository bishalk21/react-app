import React, { useEffect, useState } from "react";
import ShimmerUI from "../../components/shimmer-ui/ShimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../hooks/useRestaurantMenu";
import "./restaurant-menu.css";
import { MEAL_IMG_URL } from "../../utils/constant";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [showAllRestaurants, setShowAllRestaurants] = useState(false);

  console.log(resMenu);

  const handleFilterClick = () => {};

  const handleSeeAllRestaurants = () => {
    setShowAllRestaurants(true);
  };

  if (resMenu === null) return <ShimmerUI />;

  const { name, cuisines, costForTwoMessage } =
    resMenu?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="restro-menu">
      <div className="retro-info">
        <div className="cuisines-price">
          <h1>{name}</h1>
          <p>{costForTwoMessage}</p>
        </div>
        <p>{cuisines.join(", ")}</p>
      </div>
      <section className="light-body" id="menus">
        <div className="container">
          <div className="menus-header">
            <div id="menus-title">
              <h2 className="menus-title">Our Meals</h2>
            </div>
            <div className="menu-search">
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
              <i
                className="fas fa-search"
                onClick={() => {
                  // once got the search text in state
                  // filter the restaurant list, render the comp and update the ui
                  const filteredSearchRes = itemCards.filter((res) =>
                    res.card.info.name
                      .toLowerCase()
                      .includes(searchInput.toLowerCase())
                  );
                  setFilteredResList(filteredSearchRes);
                }}
              ></i>
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
              nClick={() => handleFilterClick("snacks")}
            >
              Snacks
            </span>
          </div>
          <div className="menu-cards" id="menu-cards">
            {itemCards.map((item) => (
              <li id="meal" data-name="breakfast" key={item.card.info.id}>
                <span>
                  <div className="menu-card">
                    <div className="meal-image">
                      <img src={MEAL_IMG_URL + item.card.info.imageId} alt="" />
                    </div>
                    <div className="meal-content">
                      <div className="meal-content-top">
                        <div className="meal-title-content">
                          <h2 className="meal-title">{item.card.info.name}</h2>
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RestaurantMenu;
