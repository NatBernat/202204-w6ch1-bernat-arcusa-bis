import { render, screen } from "@testing-library/react";
import ToDo from "./toDo";

describe("Given ToDo component", () => {
  describe("When it's rendered", () => {
    test("Then it should render 2 buttons", () => {
      const buttonsNumber = 2;
      const toDo = { id: 1, name: "Create ToDos App", done: false };

      render(<ToDo toDo={toDo} />);
      const testedButtons = screen.getAllByRole("button");

      expect(testedButtons).toHaveLength(buttonsNumber);
    });
  });
});
