import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewToDoActionCreator } from "../../redux/store/features/toDos/toDosSlice";

const ToDoForm = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const changeName = (event) => {
    setName(event.target.value);
  };

  const addToDoTask = (event) => {
    event.preventDefault();
    const newToDo = {
      id: Date.now(),
      name: name,
      done: false,
    };
    dispatch(addNewToDoActionCreator(newToDo));
  };

  return (
    <form autoComplete="off" onSubmit={addToDoTask}>
      <label>
        New to do
        <input type="text" name="name" onChange={changeName} />
      </label>
      <input type="submit" value="Add" />
    </form>
  );
};

export default ToDoForm;
