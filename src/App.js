// import React from "react";
import { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import COSTS from "./data/costs";

function App() {
  const [costs, setCosts] = useState(COSTS);

  const addCostHandler = (newCost) => {
    setCosts((previousState) => {
      return [newCost, ...previousState];
    });
  };

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "Start to learn React"),
  //   React.createElement(Costs, { costs: costs })
  // );

  return (
    <div>
      <NewCost addCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
