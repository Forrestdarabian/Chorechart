import React from "react";
import Chores from "./chores";
import "../index.css";
class ChoresList extends React.Component {
  constructor(props) {
    super(props);
    console.log("ChoresList", props);
  }
  render() {
    console.log("ChoresList", this.props);
    return (
      <div className="mychores">
        {this.props.chores.map((chore) => (
          <Chores
            key={chore.id}
            chore={chore}
            toggleCompleted={this.props.toggleCompleted}
          />
        ))}
      </div>
    );
  }
}

export default ChoresList;
