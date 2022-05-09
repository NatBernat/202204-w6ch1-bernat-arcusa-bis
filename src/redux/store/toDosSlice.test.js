import { toDosReducer } from "./features/toDos/toDosSlice";

describe("Given the toDosSlice reducer", () => {
  describe("When it receives a list of projects and a fake test action", () => {
    test("Then it should return the received list of projects", () => {
      const toDosList = [
        { id: 1, name: "Create ToDos App", done: false },
        { id: 2, name: "Test ToDos App", done: false },
      ];

      const testAction = { type: "fake" };

      const newToDo = toDosReducer(toDosList, testAction);

      expect(newToDo).toEqual(toDosList);
    });
  });
});
