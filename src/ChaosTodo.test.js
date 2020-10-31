import * as React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";

import ChaosTodo from "./ChaosTodo";

afterEach(cleanup);

test("renders correctly", () => {
  const { getByText, getByLabelText } = render(<ChaosTodo />);

  expect(getByText("CHAOS TODO")).not.toBeNull();
  expect(getByText("Add")).not.toBeNull();
  expect(getByLabelText("Add todo")).not.toBeNull();
});

test("Allows user to enter a task into their list ", () => {
  const { getByText, getByLabelText } = render(<ChaosTodo />);

  const input = getByLabelText("Add todo");
  const button = getByText("Add");

  fireEvent.change(input, { target: { value: "Testing the input" } });
  fireEvent.click(button);

  getByText("Testing the input");
});
