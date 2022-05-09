import toDosList from "./components/data/data";
import ToDosPage from "./components/ToDosPage/ToDosPage";

function App() {
  return (
    <div className="App">
      <ToDosPage toDosList={toDosList} />
    </div>
  );
}

export default App;
