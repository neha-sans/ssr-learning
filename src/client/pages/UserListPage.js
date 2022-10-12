import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

class UserList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  render() {
    const { users } = this.props;
    return users.map(({ id, name }) => {
      return <li key={id}> {name}</li>;
    });
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = {
  fetchUsers,
};

export const loadData = (store) => {
  return store.dispatch(fetchUsers());
};

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(UserList),
  loadData,
};
