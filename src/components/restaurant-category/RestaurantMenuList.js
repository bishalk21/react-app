import React from "react";
import { MEAL_IMG_URL } from "../../utils/constant";

const RestaurantMenuList = ({ menus }) => {
  return (
    <div className="p-1">
      {menus.map((menu) => (
        <div
          key={menu.card.info.id}
          className="flex justify-between h-32 p-4 m-2 border-gray-200 border-b-2"
        >
          <div className="title-desc-price-ratings w-9/12 flex flex-col justify-start text-left">
            <h2 className="text-lg font-bold">{menu.card.info.name}</h2>
            <div className="price-ratings">
              <span>
                ${" "}
                {menu.card.info.price
                  ? menu.card.info.price / 100
                  : menu.card.info.defaultPrice / 100}
              </span>
              {/* <span>{menu.card.info.avgRating}</span> */}
            </div>
            <div className="des">{menu.card.info.description}</div>
          </div>

          <div className="w-3/12">
            <button className="absolute bg-black text-white shadow-lg m-auto p-2 rounded-lg">
              Add +
            </button>

            <img
              className="w-[100%] h-[100%] border-r-amber-50 object-cover"
              src={MEAL_IMG_URL + menu.card.info.imageId}
              alt="meal"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenuList;