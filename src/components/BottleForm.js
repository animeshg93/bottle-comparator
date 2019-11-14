import React, { useState } from "react";
import FormInput from "./FormInput.js";

function BottleForm(props) {
  const [bottle, setBottle] = useState({ type: "", brand: "", capacity: "" });
  const handleInputChange = event => {
    const { name, value } = event.target;

    setBottle({ ...bottle, [name]: value });
  };
  const onSubmit = event => {
    event.preventDefault();

    props.addBottle(bottle);
    setBottle({ type: "", brand: "", capacity: "" });
  };

  return (
    <form onSubmit={onSubmit}>
      <FormInput
        label="Bottle Type"
        placeholder="Enter bottle type"
        id="bottle-type"
        value={bottle.type}
        name="type"
        onChange={handleInputChange}
      />

      <FormInput
        label="Bottle Brand"
        placeholder="Enter brand"
        id="bottle-brand"
        value={bottle.brand}
        name="brand"
        onChange={handleInputChange}
      />

      <div className="form-group">
        <label htmlFor="capacity">Capacity</label>
        <select className="form-control" id="capacity">
          <option defaultValue>Select capacity</option>
          <option>16 oz</option>
          <option>20 oz</option>
          <option>24 oz</option>
          <option>32 oz</option>
        </select>
      </div>
      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default BottleForm;
