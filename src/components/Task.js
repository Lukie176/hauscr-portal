import React, { Component } from "react";

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
          id="container"
          style={this.props.complete ? { color: "#999999" } : {}}
        >
          <div id="name">
            <p>{this.state.name}</p>
          </div>
          <div id="dueDate">
            <p>{this.state.dueDate}</p>
          </div>
          <div id="commitee">
            <p>{this.state.commitee}</p>
          </div>
          <div
            id="status"
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
            id="comments"
            style={this.props.complete ? { color: "#999999" } : {}}
          >
            <p>{this.state.comments}</p>
          </div>
        </div>

        <style jsx>
          {`
            #container {
              display: flex;
              flex-direction: row;
              align-items: center;
              font-family: "Source Sans Pro", sans-serif;
              font-weight: 400;
              width: 1074.56px;
              height: 110.11px;
              border: 1.9px solid #999999;
            }
            #name {
              width: 262px;
              margin-left: 18.99px;
              margin-right: 45.56px;
              font-weight: 600;
              font-size: 20px;
            }
            #dueDate {
              width: 89.23px;
              margin-right: 55.68px;
              font-size: 18px;
              text-align: center;
            }
            #commitee {
              width: 106px;
              height: 27.26px;
              background: #b6e8f3;
              border-radius: 18.99px;
              margin-right: 53px;
              font-size: 15px;
              line-height: 0px;
              text-align: center;
            }
            #status {
              width: 106px;
              height: 27.26px;
              background: #ae3646;
              opacity: 0.8;
              border-radius: 18.99px;
              margin-right: 55.92px;
              font-size: 15px;
              line-height: 0px;
              text-align: center;
              color: white;
              cursor: pointer;
            }
            #comments {
              width: 269px;
              font-size: 17.27px;
              line-height: 21.71px;
              color: #ae3646;
              white-space: pre-line;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}
