import React, { Component } from "react";
import Contacts from "./Components/Contacts/contacts";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      isError: false,
      isLoading: false
    };
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        this.setState({
          contacts: data
        });
      })
      .catch(err => {
        this.setState({
          isError: true
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.isError && <div>Getting API error</div>}
        <Contacts
          isLoading={this.state.isLoading}
          contacts={this.state.contacts}
        />
      </div>
    );
  }
}

export default App;
