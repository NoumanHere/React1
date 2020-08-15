import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  // Prop Type method number 1
  //   static propTypes = {
  //     name: PropTypes.string.isRequired,
  //     email: PropTypes.string.isRequired,
  //     phone: PropTypes.string.isRequired,
  //   };
  state = {
    showContactInfo: false,
  };
  onDeleteClick = () => {
    this.props.deleteClickHandler();
  };
  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <div className="container">
        <div className="card card-body mb-3">
          <h4>
            {name}
            <i
              onClick={() =>
                this.setState({ showContactInfo: !this.state.showContactInfo })
              }
              className="fa fa-sort-down"
              style={{ cursor: "pointer" }}
            ></i>
            <i
              className="fa fa-times"
              style={{ cursor: "pointer", float: "right", color: "red" }}
              onClick={this.onDeleteClick}
            ></i>
          </h4>
          {showContactInfo ? (
            <ul className="list-group">
              <li className="list-group-item">Email: {email}</li>
              <li className="list-group-item">Phone: {phone}</li>
            </ul>
          ) : null}
        </div>
      </div>
    );
  }
}
// Prop Type method number 2
Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired,
};

export default Contact;
