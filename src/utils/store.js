const { configureStore } = require("@reduxjs/toolkit");
import cartSlice from "../reducers/cartSlice";
import userReducer from "../reducers/userSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: userReducer,
  },
});

export default store;
