import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../utils/store";
import MainLayout from "../components/main-layout/MainLayout";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../mocks/data";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(RESTAURANT_DATA),
  });
});

test("Shimmer should load on rendering header", async () => {
  // load header
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <MainLayout />
      </Provider>
    </StaticRouter>
  );
  //   console.log(header);

  await waitFor(() => body.getByTestId("search-btn"));

  // const shimmer = body.getByTestId("shimmer");

  // expect(shimmer).toBeInTheDocument();
  // expect(shimmer.innerHTML).toBeInTheDocument();
  // expect(shimmer.children.length).toBe(10);

  const resList = body.getByTestId("restro-list");
  expect(resList.children.length).toBe(10);
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

  await waitFor(() => body.getByTestId("search-btn"));

  const input = body.getByTestId("search-input");

  fireEvent.change(input, {
    target: {
      value: "food",
    },
  });

  const searchBtn = body.getByTestId("search-btn");

  fireEvent.click(searchBtn);

  const resList = body.getByTestId("restro-list");

  expect(resList.children.length).toBe(4);
});
