import React from "react";
import Chores from "./chores";

class ChoresList extends React.Component {
  constructor(props) {
    super(props);
    console.log("ChoresList", props);
  }
  render() {
    console.log("ChoresList", this.props);
    return (
      <div>
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
