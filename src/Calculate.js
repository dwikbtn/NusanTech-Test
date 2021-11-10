import React, { useState } from "react";
import "./App.css";

function Calculate({ data }) {
  const [result, setResult] = useState(null);

  const onCalculateHandler = (operator) => {
    // filter the value so only valid values are pass
    const checked = data.filter(
      (item) => item.checked === true && item.value !== "" && !isNaN(item.value)
    );
    if (checked.length <= 1) {
      alert(
        "input yang dicentang harus lebih dari satu dan tidak boleh kosong"
      );
    } else {
      // reduce the value into one aray
      const reduced = checked.map((arr) => arr.value);
      switch (operator) {
        case "x":
          setResult(reduced.reduce((prevVal, currVal) => prevVal * currVal));
          break;
        case "/":
          setResult(reduced.reduce((prevVal, currVal) => prevVal / currVal));
          break;
        case "+":
          setResult(reduced.reduce((prevVal, currVal) => prevVal + currVal));
          break;
        case "-":
          setResult(reduced.reduce((prevVal, currVal) => prevVal - currVal));
          break;
        default:
          return;
      }
    }
  };
  return (
    <>
      <div className="group-btn mt-3">
        <button
          type="button"
          class="btn btn-outline-primary"
          onClick={() => onCalculateHandler("+")}
        >
          +
        </button>
        <button
          type="button"
          class="btn btn-outline-primary"
          onClick={() => onCalculateHandler("-")}
        >
          -
        </button>
        <button
          type="button"
          class="btn btn-outline-primary"
          onClick={() => onCalculateHandler("x")}
        >
          X
        </button>
        <button
          type="button"
          class="btn btn-outline-primary"
          onClick={() => onCalculateHandler("/")}
        >
          /
        </button>
        {/* display the result */}
      </div>
      <div className="result">
        <hr />
        <div>Result: {result} </div>
      </div>
    </>
  );
}

export default Calculate;
