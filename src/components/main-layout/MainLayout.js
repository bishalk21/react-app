import React, { useState, useEffect } from "react";
import RestaurantCard, {
  withPromotedLabel,
} from "../restro-card/RestaurantCard";
import ShimmerUI from "../shimmer-ui/ShimmerUI";
import { Link } from "react-router-dom";
import { RESTRO_LIST } from "../../utils/constant";
import useOnlineStatus from "../../hooks/useOnlineStatus";

const MainLayout = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const RestaurantCardWithPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(RESTRO_LIST);
      const json = await data.json();

      const restaurants =
        json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setResList(restaurants);
      setFilteredResList(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (onlineStatus === false) {
    return (
      <h1>Looks like you're offline, Please check your internet connection </h1>
    );
  }

  console.log(filteredResList);

  return (
    <>
      <div className="relative">
        <div className="w-full p-5 text-center flex gap-6 flex-wrap items-center justify-center text-black max-[426px]:text-sm">
          <div className="flex gap-3">
            <input
              data-testid="search-input"
              type="text"
              className="min-w-[250px] flex basis-3/4 border-none p-2"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              placeholder="Search restaurant, food ...."
            />
            <button
              data-testid="search-btn"
              className="border-none p-2 cursor-pointer bg-[lightgray] flex basis-1/2 rounded-lg hover:bg-white"
              onClick={() => {
                // once got the search text in state
                // filter the restaurant list, render the comp and update the ui
                const filteredSearchRes = resList.filter((res) =>
                  res.data.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredResList(filteredSearchRes);
              }}
            >
              Search
            </button>
          </div>
          <>
            <button
              className="cursor-pointer bg-[lightgray] p-2 rounded-lg border-none hover:bg-white"
              onClick={() => {
                const filteredList = resList.filter(
                  (res) => res?.info.avgRating > 4
                );
                setFilteredResList(filteredList);
              }}
            >
              Top Rated Restaurants
            </button>
            <button
              className="cursor-pointer bg-[lightgray] p-2 rounded-lg border-none hover:bg-white see-all-btn"
              onClick={() => setFilteredResList(resList)}
            >
              See All Restaurants
            </button>
          </>
        </div>
      </div>
      <div
        className="flex flex-wrap justify-center text-[#100f0f]"
        data-testid="restro-list"
      >
        {resList?.length === 0 ? (
          <ShimmerUI />
        ) : (
          filteredResList.map((res) => (
            <Link key={res?.info.id} to={"/restaurants/" + res?.info.id}>
              {res?.info.promoted ? (
                <RestaurantCardWithPromoted resData={res} />
              ) : (
                <RestaurantCard resData={res} />
              )}
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default MainLayout;
