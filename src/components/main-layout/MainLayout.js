import { useState, useEffect } from "react";
import RestaurantCard from "../restro-card/RestaurantCard";
import ShimmerUI from "../shimmer-ui/ShimmerUI";
// import { resObjList } from "../../utils/mockData";

const MainLayout = () => {
  const [resList, setResList] = useState([]);
  // const [resList, setResList] = useState(resObjList);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showAllRestaurants, setShowAllRestaurants] = useState(false);

  console.log("body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setResList(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredResList(json?.data?.cards[2]?.data?.data?.cards);
  };

  const handleSeeAllRestaurants = () => {
    setShowAllRestaurants(true);
  };

  const handleFilterRestaurants = () => {};

  return resList.length === 0 ? (
    <>
      <ShimmerUI />
    </>
  ) : (
    <div className="main-page">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="Search restaurant, food ...."
          />
          <button
            onClick={() => {
              // once got the search text in state
              // filter the restaurant list, render the comp and update the ui
              const filteredSearchRes = resList.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredResList(filteredSearchRes);
              setShowAllRestaurants(false);
            }}
          >
            Search
          </button>
        </div>
        <>
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = resList.filter(
                (res) => res.data.avgRating > 4
              );
              setFilteredResList(filteredList);
              setShowAllRestaurants(false);
            }}
          >
            Top Rated Restaurants
          </button>
          <button
            className="filter-btn see-all-btn"
            onClick={handleSeeAllRestaurants}
          >
            See All Restaurants
          </button>
        </>
      </div>
      <div className="restaurant-container">
        {!showAllRestaurants
          ? filteredResList.map((res) => (
              <RestaurantCard key={res.data.id} resData={res} />
            ))
          : resList.map((res) => (
              <RestaurantCard key={res.data.id} resData={res} />
            ))}
      </div>
    </div>
  );
};

export default MainLayout;
