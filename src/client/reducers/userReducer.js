import { FETCH_USER } from "../actions";

export default (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_USER:
      return payload.data;
    default:
      return state;
  }
};
