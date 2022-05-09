import ToDo from "../ToDo/ToDo";

const ToDosPage = ({ toDosList }) => {
  return (
    <>
      <h1>Things To Do:</h1>
      <ul>
        {toDosList.map((toDo) => {
          return <ToDo key={toDo.id} toDo={toDo} />;
        })}
        ;
      </ul>
    </>
  );
};

export default ToDosPage;
