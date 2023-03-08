import { Provider } from "react-redux";
import "./App.css";
import Counter from "./Component/Counter";
import store from "./Component/Redux/Store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
