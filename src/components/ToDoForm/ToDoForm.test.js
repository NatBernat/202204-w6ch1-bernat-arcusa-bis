import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import ToDoForm from "./ToDoForm";

describe("Given a ToDoForm component", () => {
  describe("When the user types 'conopida' in the name input", () => {
    test("Then it's value should be  'conopida'", () => {
      const newToDo = "conopida";
      render(
        <Provider store={store}>
          <ToDoForm />
        </Provider>
      );
      const toDoInput = screen.getByRole("textbox");

      userEvent.type(toDoInput, newToDo);

      expect(toDoInput).toHaveValue(newToDo);
    });
  });
});
