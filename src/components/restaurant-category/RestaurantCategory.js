import React, { useState } from "react";
import RestaurantMenuList from "./RestaurantMenuList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleOnClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div
        className="bg-gray-50 p-5 w-10/12 text-lg max-[476px]:text-sm my-2 mx-auto rounded-md text-black shadow-lg text-center"
        onClick={handleOnClick}
      >
        <div className="flex justify-between cursor-pointer">
          <span className="font-bold text-lg max-[476px]:text-sm">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="cursor-pointer">
            <i class="fa-solid fa-chevron-down"></i>
          </span>
        </div>

        {showItems && <RestaurantMenuList menus={data?.itemCards} setShowIndex={setShowIndex} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
