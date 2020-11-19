import React, { Component } from "react";
import styles from "./Task.module.css"

export default class Task extends Component {
  constructor() {
    super();

    this.state = {
      name: "Create wireframes in Figma for task assignments page",
      dueDate: "10/25/2020",
      commitee: "Creative Core",
      comments:
        "Wow this looks amazing! So proud of all the work you have done !\n- Aaron ",
    };
  }

  componentDidMount() {
    this.setState({ name: this.props.name });
  }
  render() {
    return (
      <React.Fragment>
        <div
          className={styles.container}
          style={this.props.complete ? { color: "#999999" } : {}}
        >
          <div className={styles.name}>
            <p>{this.state.name}</p>
          </div>
          <div className={styles.dueDate}>
            <p>{this.state.dueDate}</p>
          </div>
          <div className={styles.commitee}>
            <p>{this.state.commitee}</p>
          </div>
          <div
            className={styles.status}
            style={
              this.props.complete
                ? {
                    color: "rgba(0, 0, 0, 0.8)",
                    background: "#50D34D",
                    opacity: "0.7",
                  }
                : {}
            }
            onClick={() => this.props.toggleComplete(this.props.id)}
          >
            <p>{this.props.complete ? "Complete" : "In Progress"}</p>
          </div>
          <div
            className={styles.comments}
            style={this.props.complete ? { color: "#999999" } : {}}
          >
            <p>{this.state.comments}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
