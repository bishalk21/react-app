import { useDispatch, useSelector } from "react-redux";
import { MEAL_IMG_URL } from "../../utils/constant";
import { clearCart, removeItem } from "../../reducers/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(removeItem());
  };

  return (
    <div className="p-5 w-10/12 text-lg max-[476px]:text-sm my-2 mx-auto rounded-md text-black shadow-lg text-center bg-gray-50">
      <h1 className="font-bold">Cart Items - {cartItems.length}</h1>

      {cartItems.map((menu) => (
        <div
          key={menu.card.info.id}
          className="flex justify-between max-h-40 p-4 m-4 border-gray-200 border-b-2 overflow-hidden"
        >
          <div className="title-desc-price-ratings w-9/12 max-[500px]:w-7/12 flex flex-col justify-start text-left">
            <h2 className="text-lg max-[476px]:text-sm font-bold">
              {menu.card.info.name}
            </h2>
            <div className="price-ratings">
              <span>
                ${" "}
                {menu.card.info.price
                  ? menu.card.info.price / 100
                  : menu.card.info.defaultPrice / 100}
              </span>
              {/* <span>{menu.card.info.avgRating}</span> */}
            </div>
            <div className="des min-h-12 overflow-hidden overflow-y-scroll">
              {menu.card.info.description}
            </div>
          </div>

          <div className="w-3/12 max-[500px]:w-5/12">
            <button
              onClick={() => handleOnClick()}
              className="absolute bg-red-600 text-white shadow-lg max-[476px]:text-sm max-[476px]:p-1 m-auto p-2 rounded-lg"
            >
              Remove -
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

export default Cart;
