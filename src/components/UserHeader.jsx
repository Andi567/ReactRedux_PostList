import React, { Component } from "react";
import { connect } from "react-redux";

class UserHeader extends Component {
  // componentDidMount() {
  //   this.props.fetchUser(this.props.userId); //!!!this is fetching user 10 times than we should do
  // }

  render() {
    const author = this.props.user;
    // const author = this.props.user.find(user => user.id === this.props.userId);
    if (!author) {
      return null;
    }
    return <div className="header">Author: {author.name}</div>;
  }
}

//extracting logic with mapStateToProps
const mapStateToProps = (state, ownProps) => {
  return { user: state.user.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
