import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../utils/store";
import MainLayout from "../components/main-layout/MainLayout";
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../mocks/data";
import "@testing-library/jest-dom";
import RestaurantMenuList from "../components/restaurant-category/RestaurantMenuList";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MENU_DATA),
  });
});

test("Search for string(food) on rendering header", async () => {
  // load header
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <MainLayout />
      </Provider>
    </StaticRouter>
  );
  //   console.log(header);

  await waitFor(() => body.getByTestId("menu"));

  const addBtn = body.getAllByTestId("add-btn");

  fireEvent.click(addBtn[0]);

  const cart = body.getByTestId("cart");

  expect(cart.innerHTML).toBe("Cart ");
});
