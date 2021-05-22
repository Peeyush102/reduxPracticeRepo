import React from "react";
import Cake from "./Cake";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Cake />
      </div>
    </Provider>
  );
}

export default App;
