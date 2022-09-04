import axios from "axios";

export const FETCH_USER = "fetch-users";
export const fetchUsers = () => async (dispatch) => {
  const res = await axios.get("http://react-ssr-api.herokuapp.com/users");
  return dispatch({
    type: FETCH_USER,
    payload: res,
  });
};
