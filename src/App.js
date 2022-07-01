import React, { createContext } from "react";
import "./App.css";
import ComA from "./ComA";

const FirstName = createContext(); //create contaxt
const LastName = createContext();
function App() {
  return (
    <div className="App">
      <FirstName.Provider value={"Kishan"}>{/*data-provider*/}
        <LastName.Provider value={"Patel"}>
          <ComA />
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  );
}

export default App;
export { FirstName,LastName };
