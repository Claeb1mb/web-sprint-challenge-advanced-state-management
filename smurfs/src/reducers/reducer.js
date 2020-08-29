import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAIL,
  POST_START,
  POST_SUCCESS,
  POST_FAIL,
} from "../actions/action";

const initialState = {
  smurfs: [],
  isFetching: true,
  error: "",
  id: new Date(),
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
      };
    case FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case POST_START:
      return {
        ...state,
        isFetching: true,
      };
    case POST_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
      };
    case POST_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
