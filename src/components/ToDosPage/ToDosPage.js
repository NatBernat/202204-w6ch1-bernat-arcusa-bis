import { useSelector } from "react-redux";
import ToDo from "../ToDo/ToDo";

const ToDosPage = () => {
  const toDos = useSelector((state) => state.toDos);
  return (
    <ul>
      {toDos.map((toDo) => (
        <ToDo toDo={toDo} key={toDo.id} />
      ))}
    </ul>
  );
};

export default ToDosPage;
