import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./CostForm.css";

function CostForm({ addCost, switchForm }) {
  //   const [descriptionValue, setDescriptionValue] = useState("");
  //   const [priceValue, setPricenValue] = useState("");
  //   const [dateValue, setDateValue] = useState("");

  //   function descriptionChangeHandler(value) {
  //     setDescriptionValue(value);
  //   }

  //   function priceChangeHandler(event) {
  //     setPricenValue(event.target.value);
  //   }

  //   function dateChangeHandler(event) {
  //     setDateValue(event.target.value);
  //   }

  const [inputData, setInputData] = useState({
    description: "",
    price: "",
    date: "",
  });
  const { description, price, date } = inputData;

  function descriptionChangeHandler(event) {
    // setinputData({
    //   ...inputData,
    //   description: event.target.valu,
    // });
    setInputData((previousState) => {
      return {
        ...previousState,
        description: event.target.value,
      };
    });
  }

  function priceChangeHandler(event) {
    setInputData((previousState) => {
      return {
        ...previousState,
        price: event.target.value,
      };
    });
  }

  function dateChangeHandler(event) {
    setInputData((previousState) => {
      return {
        ...previousState,
        date: event.target.value,
      };
    });
  }

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (inputData.date && inputData.description && inputData.price) {
      addCost(convertInputDataToCostItem(inputData));
      setInputData({
        description: "",
        price: "",
        date: "",
      });
      switchForm();
    }
  };

  const convertInputDataToCostItem = (inputData) => {
    return {
      costDate: new Date(inputData.date),
      costDescription: inputData.description,
      costAmount: parseFloat(inputData.price),
      id: uuidv4(),
    };
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Description</label>
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={descriptionChangeHandler}
          />
        </div>
        <div className="new-cost__control">
          <label>Price</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            placeholder="Price"
            value={price}
            onChange={priceChangeHandler}
          />
        </div>
        <div className="new-cost__control">
          <label>Date</label>
          <input
            type="date"
            value={date}
            min="2020-01-01"
            max="2023-12-12"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавить расход</button>
          <button onClick={switchForm}>Закрыть форму</button>
        </div>
      </div>
    </form>
  );
}
export default CostForm;
