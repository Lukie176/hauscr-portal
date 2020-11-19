import React, { Component } from "react";
import Task from "./Task";
import styles from "./TaskHolder.module.css"

export default class TaskHolder extends Component {
  constructor() {
    super();

    this.state = {
      taskList: [
        { name: "Create wireframes in Figma  for task assignments page",
          complete: false },
        { name: "Ideation Inspiration in Google Slide Deck", 
          complete: false },
        { name: "Create 1 wireframe version for task assignments page",
          complete: true }
      ]
    };

    this.toggleComplete = this.toggleComplete.bind(this);
  }

  toggleComplete(id) {
    this.setState({
      taskList: this.state.taskList.map((task, index) =>
        index === id ? { ...task, complete: !task.complete } : task
      ),
    });
  }

  render() {
    return (
      <div>
        <h1 className={styles.header}>Ongoing</h1>
        {this.state.taskList
          .map(({ name, complete }, index) => (
            <Task
              key={index}
              name={name}
              complete={complete}
              id={index}
              toggleComplete={this.toggleComplete}
            />
          ))
          .filter((task) => !task.props.complete)}
        <h1 className={styles.header}>Completed</h1>
        {this.state.taskList
          .map(({ name, complete }, index) => (
            <Task
              key={index}
              name={name}
              complete={complete}
              id={index}
              toggleComplete={this.toggleComplete}
            />
          ))
          .filter((task) => task.props.complete)}
      </div>
    );
  }
}
