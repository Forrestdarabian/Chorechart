import React from "react";
import ChoresList from "./components/chores-list";
import ChoresForm from "./components/chores-form";
import "./index.css";
import logo from "./components/icons/household-chores.svg";

const choresData = [
  {
    task: "Click this chore to complete it",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "This chore is completed, click 'clear completed'",
    id: 1528817084358,
    completed: true,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      chores: choresData,
    };
  }

  filterCompleted = () => {
    this.setState({
      chores: this.state.chores.filter((chore) => {
        return !chore.completed;
      }),
    });
  };

  toggleCompleted = (id) => {
    console.log("toggleCompleted", id);
    this.setState({
      chores: this.state.chores.map((chore) => {
        if (id === chore.id) {
          return { ...chore, completed: !chore.completed };
        } else {
          return chore;
        }
      }),
    });
  };

  addChore = (task) => {
    this.setState({
      chores: [
        ...this.state.chores,
        {
          task: task,
          id: Date.now(),
          completed: false,
        },
      ],
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <header className="nav">
          <h1 className="nav-h1">Chore Chart</h1>
        </header>
        <h1>
          Welcome to <b>Chore Chart!</b>
        </h1>
        <h3>
          Type in a chore, then click "Add a New Chore" to display it on the
          screen. Click a chore to complete it and press the "Clear Completed"
          button to delete all finished chores!
        </h3>
        <ChoresForm
          addChore={this.addChore}
          filterChores={this.filterCompleted}
        />
        <h3>Chores:</h3>
        <ChoresList
          chores={this.state.chores}
          toggleCompleted={this.toggleCompleted}
        />
        <br />
        <img src={logo} />
        <br />
        <br />
        <br />

        <footer className="footer pt-80 pt-xs-60">
          <div className="footer-container">
            <h1>Chore Chart</h1>
            <div className="copyright">
              <p>
                © 2020
                <a>
                  <b> Forrest Darabian </b>
                </a>
                All Rights Reserved.
              </p>
            </div>
            <div>
              Icons made by{" "}
              <a href="http://www.freepik.com/" title="Freepik">
                Freepik
              </a>{" "}
              from{" "}
              <a href="https://www.flaticon.com/" title="Flaticon">
                {" "}
                www.flaticon.com
              </a>
            </div>
            <div className="left">
              <h4 className="something">Contact / Links</h4>
              <li>
                {" "}
                <a href="mailto:forrestdarabian@gmail.com">
                  <i className="ion-ios-email fa-icons"></i>
                  Contact Me
                </a>
              </li>
              <li>
                <a href="https://www.forrestdarabian.com/">
                  <i className="fa-angle-double-right"></i>Developers Site
                </a>
              </li>
              <br />
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
