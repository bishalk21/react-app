import { sumTest } from "../components/testing/sumTest";

test("sum of 2 num", () => {
  expect(sumTest(2, 3)).toBe(5);
  expect(sumTest(-2, 3)).toBe(1);
  //   expect(sumTest()).toBe("Please Check Argument");
});
