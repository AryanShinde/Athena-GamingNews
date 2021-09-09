import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { gamesAction } from "./actions/gamesAction";

function App() {
  const dispatch=useDispatch();
useEffect(()=>{
  dispatch(gamesAction());
})
  return (
    <div className="App">
     <h1>Athenas</h1>
    </div>
  );
}

export default App;
