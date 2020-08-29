import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const POST_START = "POST_START";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAIL = "POST_SUCCESS";

// Axios .Get

export const getSmurf = () => (dispatch) => {
  dispatch({ type: FETCH_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
      console.log("Api Response", res);
    })
    .catch((error) => {
      dispatch({ type: FETCH_FAIL, payload: error.res });
      console.log("Api error", error);
    });
};

// Axios Post Call

export const postSmurf = () => (dispatch) => {
  dispatch({ type: POST_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then((response) => {
      console.log("get2 response", response.data);
      dispatch({ type: POST_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: POST_FAIL, payload: error.response });
    });
};

export const postSmurfs = (cb) => (dispatch) => {
  dispatch({ type: POST_START });
  axios
    .post(`http://localhost:3333/smurfs`, cb)
    .then((response) => {
      console.log("arra?", response.data);
      dispatch({ type: POST_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: POST_FAIL, payload: error.response });
    });
};
