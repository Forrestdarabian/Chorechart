import React from "react";
import "./chores.css";

class Chores extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.chore);
    return (
      <div
        onClick={() => this.props.toggleCompleted(this.props.chore.id)}
        className={this.props.chore.completed ? "completed" : ""}
      >
        {this.props.chore.task}
      </div>
    );
  }
}

export default Chores;
