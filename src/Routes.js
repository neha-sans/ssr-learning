import Home from "./client/components/Home.js";
import UserList, { loadData } from "./client/components/UserList.js";

export default [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/users",
    component: UserList,
    loadData,
  },
];
