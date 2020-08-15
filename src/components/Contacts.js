import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jhondoe@gmail.com",
        phone: "222-22-222",
      },
      {
        id: 2,
        name: "Karen smith",
        email: "karensimth@gmail.com",
        phone: "333-22-222",
      },
      {
        id: 3,
        name: "Henry Doe",
        email: "Henry@gmail.com",
        phone: "555-555-555",
      },
    ],
  };
  deleteContact(id) {
    const { contacts } = this.state;

    const newContacts = contacts.filter((contact) => contact.id !== id);
    this.setState({
      contacts: newContacts,
    });
  }

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
