import HomePage from "./client/pages/HomePage.js";
import UserListPage from "./client/pages/UserListPage.js";

export default [
  {
    path: "/",
    exact: true,
    ...HomePage,
  },
  {
    path: "/users",
    ...UserListPage,
  },
];
