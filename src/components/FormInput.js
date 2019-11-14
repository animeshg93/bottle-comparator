import React from "react";

function FormInput(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type="text"
        className="form-control"
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        name={props.name}
      />
    </div>
  );
}

export default FormInput;
