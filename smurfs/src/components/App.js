import React, { useEffect } from "react";
import "./App.css";
import Smurfed from "./displaySmurf";
import { getSmurf } from "../actions/action";
import { connect } from "react-redux";
import Form from "./smurfForm";

const App = () => {
  useEffect(() => {
    getSmurf();
  }, [getSmurf]);
  return (
    <div className="App">
      <h1>SMURFS! W/Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <Smurfed />
      <Form />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
  };
};

export default connect(mapStateToProps, { getSmurf })(App);
