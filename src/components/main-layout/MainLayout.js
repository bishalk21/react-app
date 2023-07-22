import { useState, useEffect } from "react";
import RestaurantCard, {
  withPromotedLabel,
} from "../restro-card/RestaurantCard";
import ShimmerUI from "../shimmer-ui/ShimmerUI";
import { Link } from "react-router-dom";
import { RESTRO_LIST } from "../../utils/constant";
import useOnlineStatus from "../../hooks/useOnlineStatus";
// import { resObjList } from "../../utils/mockData";

const MainLayout = () => {
  const [resList, setResList] = useState([]);
  // const [resList, setResList] = useState(resObjList);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showAllRestaurants, setShowAllRestaurants] = useState(false);
  const onlineStatus = useOnlineStatus();

  const RestaurantCardWithPromoted = withPromotedLabel(RestaurantCard);

  // console.log("body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTRO_LIST);
    const json = await data.json();

    setResList(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredResList(json?.data?.cards[2]?.data?.data?.cards);
  };

  const handleSeeAllRestaurants = () => {
    setShowAllRestaurants(true);
  };

  if (onlineStatus === false) {
    return (
      <h1>Looks like you're offline, Please check your internet connection </h1>
    );
  }

  return (
    <>
      <div className="main-page">
        <div className="filter">
          <div className="search">
            <input
              data-testid="search-input"
              type="text"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              placeholder="Search restaurant, food ...."
            />
            <button
              data-testid="search-btn"
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
        <>
          {resList?.length === 0 ? (
            <>
              <ShimmerUI />
            </>
          ) : (
            <div className="restaurant-container" data-testid="restro-list">
              {!showAllRestaurants
                ? filteredResList.map((res) => (
                    <Link key={res.data.id} to={"/restaurants/" + res.data.id}>
                      {res.data.promoted ? (
                        <RestaurantCardWithPromoted resData={res} />
                      ) : (
                        <RestaurantCard resData={res} />
                      )}
                    </Link>
                  ))
                : resList.map((res) => (
                    <Link key={res.data.id} to={"/restaurants/" + res.data.id}>
                      {res.data.promoted ? (
                        <RestaurantCardWithPromoted resData={res} />
                      ) : (
                        <RestaurantCard resData={res} />
                      )}
                    </Link>
                  ))}
            </div>
          )}
        </>
      </div>
    </>
  );
};

export default MainLayout;
