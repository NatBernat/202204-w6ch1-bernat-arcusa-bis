import { render, screen } from "@testing-library/react";
import ToDosPage from "./ToDosPage";

describe("Given ToDosPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should render 2 buttons", () => {
      const buttonsNumber = 2;
      const toDosList = [{ id: 1, name: "Create ToDos App", done: false }];

      render(<ToDosPage toDosList={toDosList} />);
      const testedButtons = screen.getAllByRole("button");

      expect(testedButtons).toHaveLength(buttonsNumber);
    });
  });
});
