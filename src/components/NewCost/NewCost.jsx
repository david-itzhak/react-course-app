import { useState } from "react";
import CostForm from "./CostForm";
import CostFormSwitcher from "./CostFormSwitcher";
import "./NewCost.css";

function NewCost({ addCost }) {
  const [isFormOn, setIsFormOn] = useState(false);

  const switchFormHandler = () => {
    setIsFormOn((previousStateIsFormOn) => !previousStateIsFormOn);
  };

  return (
    <div className="new-cost">
      {isFormOn ? (
        <CostForm addCost={addCost} switchForm={switchFormHandler} />
      ) : (
        <CostFormSwitcher switchForm={switchFormHandler} />
      )}
    </div>
  );
}
export default NewCost;
