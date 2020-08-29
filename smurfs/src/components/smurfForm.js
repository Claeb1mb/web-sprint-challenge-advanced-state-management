import React from "react";
import { connect } from "react-redux";
import { useState } from "react";
import { postSmurf, postSmurfs, getSmurf } from "../actions/action";

const Form = (props) => {
  const [formState, setFormState] = useState({
    name: "",
    age: "",
    height: "",
    id: new Date(),
  });

  const handleChanges = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState({ ...formState });
    postSmurfs();
    console.log("form Submitted ", formState);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChanges}
          name="name"
          value={formState.name}
        ></input>
        <input
          type="text"
          onChange={handleChanges}
          name="age"
          value={formState.age}
        ></input>
        <input
          type="text"
          onChange={handleChanges}
          name="height"
          value={formState.height}
        ></input>
        <button>Get Smurfs</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
  };
};
export default connect(mapStateToProps, postSmurf)(Form);
