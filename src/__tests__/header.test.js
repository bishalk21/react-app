import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../utils/store";
import Header from "../components/header/Header";
import { StaticRouter } from "react-router-dom/server";

test("logo should load on rendering header", () => {
  // load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  //   console.log(header);

  // check if logo is loaded

  const logo = header.getAllByTestId("logo");
  console.log(logo[0]);

  expect(logo[0].src).toBe("http://localhost/dummy.png");
});

test("Online Status should be green on rendering header", () => {
  // load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  //   console.log(header);

  const onlineStatus = header.getByTestId("online-status");

  expect(onlineStatus.innerHTML).toBe("✅");
});

test("cart item should be zero on rendering header", () => {
  // load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  //   console.log(header);

  const cart = header.getByTestId("cart");

  expect(onlineStatus.innerHTML).toBe("Cart 0");
});
