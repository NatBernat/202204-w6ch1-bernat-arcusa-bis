import { useDispatch } from "react-redux";
import { removeToDosActionCreator } from "../../redux/store/features/toDos/toDosSlice";
import ToDoStyled from "./ToDoStyled";

const ToDo = ({ toDo: { id, name, done } }) => {
  const dispatch = useDispatch();

  const removeToDo = () => dispatch(removeToDosActionCreator(id));

  return (
    <ToDoStyled>
      <p className="to-do__id">#{id}</p>
      <h2>{name}</h2>
      <p className="to-do__status">{done ? "Done!" : "Pending"}</p>
      <section>
        <button>Edit</button>
        <button onClick={removeToDo}>Delete</button>
      </section>
    </ToDoStyled>
  );
};

export default ToDo;
