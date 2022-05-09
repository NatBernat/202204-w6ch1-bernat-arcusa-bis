import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDosPage from "./components/ToDosPage/ToDosPage";
import toDosList from "./data/data";
import { loadToDosActionCreator } from "./redux/store/features/toDos/toDosSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadToDosActionCreator(toDosList));
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Things To Do</h1>
      <ToDoForm />
      <ToDosPage />
    </div>
  );
}

export default App;
