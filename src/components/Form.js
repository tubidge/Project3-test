import React, { Component } from "react";

class Form extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",
    password: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form>
        <p>Username: {this.state.username}</p>
        <p>Password: {this.state.password}</p>
        <input
          name="username"
          type="text"
          placeholder="Username"
          onChange={this.handleInputChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={this.handleInputChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
