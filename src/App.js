import React, { Component } from "react";
import "./App.css";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contacts />
      </div>
    );
    //   return React.createElement(
    //     "div",
    //     {
    //       className: "App",
    //     },
    //     React.createElement("h1", null, "The app Component")
    //   );
  }
}

export default App;
