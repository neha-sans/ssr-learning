import Home from "./client/components/Home.js";
import UserList from "./client/components/UserList.js";

export default [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/users",
    component: UserList,
  },
];
