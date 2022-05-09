const ToDo = ({ toDo: { id, name, done } }) => {
  return (
    <li>
      <h2>{`${id}: ${name}`}</h2>
      <p>{done ? "Done!" : "Pending"}</p>
      <button>Edit</button>
      <button>Delete</button>
    </li>
  );
};

export default ToDo;
