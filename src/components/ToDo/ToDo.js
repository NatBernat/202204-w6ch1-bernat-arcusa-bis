const ToDo = ({ toDo: { id, name, done } }) => {
  return (
    <>
      <h2>{`${id} - ${name}`}</h2>
      <p>{done}</p>
      <button>Edit</button>
      <button>Delete</button>
    </>
  );
};

export default ToDo;
