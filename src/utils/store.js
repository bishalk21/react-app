const { configureStore } = require("@reduxjs/toolkit");
import cartSlice from "../reducers/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
