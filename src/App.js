import { useState } from "react";
import Calculate from "./Calculate";
import "./App.css";

export default function App() {
  const [values, setValue] = useState([
    {
      value: "",
      checked: false,
    },
    {
      value: "",
      checked: false,
    },
    {
      value: "",
      checked: false,
    },
  ]);

  return (
    <div className="container-md">
      <div className="card mt-2 p-3">
        <h2>Calculator</h2>
        <form>
          {/* form for all the inputs value */}
          {values.map((data, i) => {
            return (
              <div key={i} className={`form input-group input-group-lg mt-2`}>
                <input
                  type="number"
                  className="input mr-2"
                  value={data.value}
                  pattern="[0-9]*"
                  onChange={(e) => {
                    const cloneValues = [...values];
                    cloneValues[i].value = parseFloat(e.target.value);
                    setValue(cloneValues);
                  }}
                />
                <input
                  type="checkbox"
                  value={data.checked}
                  onChange={(e) => {
                    const cloneValues = [...values];
                    cloneValues[i].checked = !cloneValues[i].checked;
                    setValue(cloneValues);
                  }}
                />
              </div>
            );
          })}
        </form>
        {/* pass the array as props */}
        <Calculate data={values} />
      </div>
    </div>
  );
}
