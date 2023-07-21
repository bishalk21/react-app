import { useDispatch, useSelector } from "react-redux";
import { MEAL_IMG_URL } from "../../utils/constant";
import { clearCart, removeItem } from "../../reducers/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1 className="font-bold">Cart Items - {cartItems.length}</h1>

      {cartItems.map((menu) => (
        <div
          key={menu.card.info.id}
          className="flex justify-between h-32 p-4 m-2 border-gray-200 border-b-2 bg-gray"
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
            <button
              onClick={() => handleOnClick()}
              className="absolute bg-black text-white shadow-lg m-auto p-2 rounded-lg"
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
