import React, { Component } from "react";
import "./App.css";
import { Button, Card, CardTitle, Container } from "react-materialize";
import { CardContent } from "@material-ui/core";
const githubProfile = "https://api.github.com/users/iam2anangel";

class App extends Component {
  state = { user: {}, active: false };
  componentDidMount = event => {
    fetch(githubProfile)
      .then(response => response.json())
      .then(profileInfo => {
        this.setState({ user: profileInfo });
        console.log(Object.entries({ profileInfo }));
      });
  };

  handleClick = event => {
    this.setState(previousState => ({ active: !previousState.active }));
  };

  render() {
    return (
      <Container>
        <Button
          id="spinner"
          onClick={this.handleClick}
          className="trinity-rings-spinner"
        >
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
        </Button>
        {this.state.active ? (
          <Card
            id="card"
            className="small"
            header={
              <div id="parent">
                <CardTitle image={this.state.user.avatar_url}>
                  <br />
                  <b>{this.state.user.name}</b>
                  <br />
                </CardTitle>
                <CardContent>
                  <b>Login: </b>
                  {this.state.user.login}
                  <br />
                  <b>Public repositories:</b> {this.state.user.public_repos}
                  <br />
                  <p>
                    Hi there. I'm Jen and I'm too old to be back in school.{" "}
                  </p>
                  <a href="https://epic-spinners.epicmax.co/#/">Moving Icons</a>
                  {/* </Typography> */}
                </CardContent>
              </div>
            }
          />
        ) : null}
      </Container>
    );
  }
}

export default App;
