import { useDispatch } from "react-redux";
import { removeToDosActionCreator } from "../../redux/store/features/toDos/toDosSlice";

const ToDo = ({ toDo: { id, name, done } }) => {
  const dispatch = useDispatch();

  const removeToDo = () => dispatch(removeToDosActionCreator(id));

  return (
    <li>
      <h2>{`${name} (#${id})`}</h2>
      <p>{done ? "Done!" : "Pending"}</p>
      <button>Edit</button>
      <button onClick={removeToDo}>Delete</button>
    </li>
  );
};

export default ToDo;
