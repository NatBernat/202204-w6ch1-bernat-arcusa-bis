import { useSelector } from "react-redux";
import ToDo from "../ToDo/ToDo";
import ToDosPageStyled from "./ToDosPageStyled";

const ToDosPage = () => {
  const toDos = useSelector((state) => state.toDos);
  return (
    <ToDosPageStyled>
      {toDos.map((toDo) => (
        <ToDo toDo={toDo} key={toDo.id} />
      ))}
    </ToDosPageStyled>
  );
};

export default ToDosPage;
