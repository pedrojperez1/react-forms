import './App.css';
import BoxList from "./BoxList";
import boxes from "./boxes"

function App() {
  return (
    <div className="App">
      <BoxList boxes={boxes}/>
    </div>
  );
}

export default App;
