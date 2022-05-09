import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import ToDo from "./toDo";

describe("Given ToDo component", () => {
  let toDo;
  beforeEach(() => {
    toDo = { id: 1, name: "Create ToDos App", done: false };
  });
  describe("When it's rendered", () => {
    test("Then it should render 2 buttons", () => {
      const buttonsNumber = 2;

      render(
        <Provider store={store}>
          <ToDo toDo={toDo} />
        </Provider>
      );
      const testedButtons = screen.getAllByRole("button");

      expect(testedButtons).toHaveLength(buttonsNumber);
    });

    test("Then it should render 'Pending' text", () => {
      render(
        <Provider store={store}>
          <ToDo toDo={toDo} />
        </Provider>
      );
      const doneText = screen.getByText("Pending");

      expect(doneText).toBeInTheDocument();
    });

    test("Then it should render 'Done!' text", () => {
      const toDo = { id: 1, name: "Create ToDos App", done: true };

      render(
        <Provider store={store}>
          <ToDo toDo={toDo} />
        </Provider>
      );
      const doneText = screen.getByText("Done!");

      expect(doneText).toBeInTheDocument();
    });
  });
});
