import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

export class UserList extends Component {
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

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
