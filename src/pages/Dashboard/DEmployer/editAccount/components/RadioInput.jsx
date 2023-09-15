import React from "react";

const RadioInput = ({ name, id, value, label, checked, onChange }) => (
  <div className="f-radio-b mtop-20 mright-40 d-inline-block">
    <input
      type="radio"
      name={name}
      id={id}
      value={value}
      checked={checked}
      onChange={onChange}
    />
    <label htmlFor={id} className="f-16 fn">
      {label}
    </label>
    <span className="check"></span>
  </div>
);

export default RadioInput;
