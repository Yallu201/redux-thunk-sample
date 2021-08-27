import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {increase,decrease} from './modules/counter';
function App() {
  const dispatch = useDispatch();
  const count = useSelector((rootReducer) => rootReducer.counter.count);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{count}</h1>
        <button onClick={()=>dispatch(increase(5))}>+5</button>
        <button onClick={()=>dispatch(decrease(3))}>-3</button>
      </header>
    </div>
  );
}

export default App;
