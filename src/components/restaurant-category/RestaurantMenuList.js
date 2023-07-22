import React from "react";
import { MEAL_IMG_URL } from "../../utils/constant";
import { addItem } from "../../reducers/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenuList = ({ menus, setShowIndex }) => {
  const dispatch = useDispatch();

  const handleOnClick = (item) => {
    dispatch(addItem(item));
    setShowIndex(item);
  };
  return (
    <div className="p-1">
      {menus.map((menu) => (
        <div
          data-testid="menu"
          key={menu.card.info.id}
          className="flex justify-between h-32 p-4 m-2 border-gray-200 border-b-2"
        >
          <div className="title-desc-price-ratings w-8/12 flex flex-col justify-start text-left">
            <h2 className="text-lg font-bold">{menu.card.info.name}</h2>
            <div className="price-ratings">
              <span className="mb-3">
                ${" "}
                {menu.card.info.price
                  ? menu.card.info.price / 100
                  : menu.card.info.defaultPrice / 100}
              </span>
            </div>
            <div className="des">{menu.card.info.category}</div>
          </div>

          <div className="w-4/12">
            <button
              data-testid="add-btn"
              onClick={() => handleOnClick(menu)}
              className="absolute bg-black text-white shadow-lg m-auto p-2 rounded-lg hover:bg-green-500 hover:text-black"
            >
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
