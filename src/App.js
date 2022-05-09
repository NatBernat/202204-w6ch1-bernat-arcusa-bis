import ToDosPage from "./components/ToDosPage/ToDosPage";
import toDosList from "../data/data";

function App() {
  return (
    <div className="App">
      <ToDosPage toDosList={toDosList} />
    </div>
  );
}

export default App;
