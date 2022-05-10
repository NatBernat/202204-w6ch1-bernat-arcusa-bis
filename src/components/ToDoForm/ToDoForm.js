import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewToDoActionCreator } from "../../redux/store/features/toDos/toDosSlice";
import ToDoFormStyled from "./ToDoFormStyled";

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
      name,
      done: false,
    };
    dispatch(addNewToDoActionCreator(newToDo));
  };

  return (
    <ToDoFormStyled autoComplete="off" onSubmit={addToDoTask}>
      <label>
        New to do:
        <input type="text" name="name" value={name} onChange={changeName} />
      </label>
      <button type="submit">Add</button>
    </ToDoFormStyled>
  );
};

export default ToDoForm;
