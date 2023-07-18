import React, { useState } from "react";
import RestaurantMenuList from "./RestaurantMenuList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleOnClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div
        className="bg-gray-50 p-5 w-10/12 my-2 mx-auto rounded-md text-black shadow-lg text-center"
        onClick={handleOnClick}
      >
        <div className="flex justify-between cursor-pointer">
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="cursor-pointer">
            <i class="fa-solid fa-chevron-down"></i>
          </span>
        </div>

        {showItems && <RestaurantMenuList menus={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
