import React, { Component } from "react";

export default class PersonClass extends Component {
  render() {
    return (
      <div>
        <h1>
          Hello {this.props.name} {this.props.surname}!
        </h1>
        {this.props.age ? <p>You have {this.props.age} years old!</p> : null}
      </div>
    );
  }
}
