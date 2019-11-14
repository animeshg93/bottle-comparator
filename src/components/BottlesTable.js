import React from "react";

export default function BottlesTable(props) {
  return (
    <div className="flex-large">
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Brand</th>
            <th>Capacity</th>
          </tr>
        </thead>
        <tbody>
          {props.bottles.map(bottle => (
            <tr>
              <td>{bottle.type}</td>
              <td>{bottle.brand}</td>
              <td>{bottle.capacity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
