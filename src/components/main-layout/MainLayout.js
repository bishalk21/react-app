import { useState } from "react";
import RestaurantCard from "../restro-card/RestaurantCard";
import { resObjList } from "../../utils/mockData";

const MainLayout = () => {
  const [resList, setResList] = useState(resObjList);

  return (
    <div className="main-page">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resList.filter(
              (res) => res.data.avgRating > 4
            );
            setResList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {resList.map((res) => (
          <RestaurantCard key={res.data.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default MainLayout;
