import { useState } from "react";

export default function App() {
  const [values, setValue] = useState({
    firstValue: {
      value: 0,
      checked: false,
    },
    secondValue: {
      value: 0,
      checked: false,
    },
    thirdValue: {
      value: 0,
      checked: false,
    },
  });
  return (
    <>
      <form>
        <div className=" form form__value1">
          <input
            type="number"
            className="input"
            value={values.firstValue.value}
            onChange={(e) => {
              setValue({
                ...values,
                firstValue: {
                  ...values.firstValue,
                  value: parseInt(e.target.value),
                },
              });
            }}
          />
          <input
            type="checkbox"
            value={values.firstValue.checked}
            onChange={() => {
              setValue({
                ...values,
                firstValue: {
                  ...values.firstValue,
                  checked: !values.firstValue.checked,
                },
              });
            }}
          />
        </div>
        <div className=" form form__value2">
          <input
            type="number"
            className="input"
            value={values.secondValue.value}
            onChange={(e) => {
              setValue({
                ...values,
                secondValue: {
                  ...values.secondValue,
                  value: parseInt(e.target.value),
                },
              });
            }}
          />
          <input
            type="checkbox"
            value={values.secondValue.checked}
            onChange={() => {
              setValue({
                ...values,
                secondValue: {
                  ...values.secondValue,
                  checked: !values.secondValue.checked,
                },
              });
            }}
          />
        </div>
        <div className=" form form__value3">
          <input
            type="number"
            className="input"
            value={values.thirdValue.value}
            onChange={(e) => {
              setValue({
                ...values,
                thirdValue: {
                  ...values.thirdValue,
                  value: parseInt(e.target.value),
                },
              });
            }}
          />
          <input
            type="checkbox"
            value={values.thirdValue.checked}
            onChange={() => {
              setValue({
                ...values,
                thirdValue: {
                  ...values.thirdValue,
                  checked: !values.thirdValue.checked,
                },
              });
            }}
          />
        </div>
        {console.log(values)}
      </form>
    </>
  );
}
