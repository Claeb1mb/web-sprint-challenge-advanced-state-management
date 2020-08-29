import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurf } from "../actions/action";

const Smurfed = (props) => {
  return (
    <div>
      {props.smurfs.map((smurf) => {
        return (
          <div key={smurf.id}>
            <div>{smurf.name}</div>
            <div>{smurf.age}</div>
            <div>{smurf.height}</div>
          </div>
        );
      })}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
  };
};

export default connect(mapStateToProps, { getSmurf })(Smurfed);
