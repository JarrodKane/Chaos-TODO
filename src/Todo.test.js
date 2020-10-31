import * as React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";

import Todo from "./Todo";

afterEach(cleanup);

jest.mock("react-beautiful-dnd", () => ({
  Droppable: ({ children }) =>
    children(
      {
        draggableProps: {
          style: {},
        },
        innerRef: jest.fn(),
      },
      {}
    ),
  Draggable: ({ children }) =>
    children(
      {
        draggableProps: {
          style: {},
        },
        innerRef: jest.fn(),
      },
      {}
    ),
  DragDropContext: ({ children }) => children,
}));

test("renders correctly with passed in props", () => {
  const fakeFunction = () => {
    //Do Nothing
  };
  const { debug, getByText, getByLabelText } = render(
    <Todo
      index={1}
      key={1}
      content={"Content Stuff"}
      iD={1}
      status={false}
      changeStatus={fakeFunction}
      editTodo={fakeFunction}
      removeTodo={fakeFunction}
    />
  );

  getByText("Content Stuff");
});
