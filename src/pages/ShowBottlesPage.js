import React, { useState } from "react";
import BottlesTable from "../components/BottlesTable";
// import AddBottle from "./AddBottle";
import { NavLink } from "react-router-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import BottleForm from "../components/BottleForm";

export default function ShowBottlesPage() {
  const [bottles, setBottles] = useState([]);

  const addBottle = bottle => {
    setBottles([...bottles, bottle]);
    window.alert(bottles.length);
  };

  return (
    <>
      <div className="jumbotron">
        <h4 className="text-center">Bottles</h4>
      </div>

      <Router>
        <NavLink to="/add">Add Bottle</NavLink>
        <Route
          path="/add"
          component={() => <BottleForm addBottle={addBottle} />}
        />
      </Router>
      <BottlesTable bottles={bottles} />
    </>
  );
}
