import React, { Component } from "react";

import UserService from "../../services/user.service";

class BoardModerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getUserBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
                <h3>{ this.state.content }</h3>
                <h1>Mohamed Ahmed </h1>
                <h4 style={{color:"red"}}>BoardModerator<span style={{fontSize:14,color:"blue"}}>By Mohamed Abdalazim</span></h4>
        </header>
      </div>
    );
  }
}


export default  BoardModerator