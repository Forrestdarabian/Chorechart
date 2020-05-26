import React from "react";

class ChoresForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newchore: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addChore(this.state.newchore);
    this.setState({ newchore: "" });
  };

  render() {
    console.log("render");
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="newchore"
          placeholder="Add a new Chore"
          onChange={this.handleChange}
          value={this.state.newchore}
        />
        <button type="submit">Add a New Chore</button>
        <button onClick={this.props.filterChores}>Clear Completed</button>
      </form>
    );
  }
}

export default ChoresForm;
