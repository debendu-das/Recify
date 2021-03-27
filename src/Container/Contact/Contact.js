import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import { Container, Row } from 'react-bootstrap';
import './Contact.css';

class Contact extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstname: "ABC",
      lastname: "XYZ",
      phno: 9876543210,
      message: "Your message",
      email: "abc@gmail.com",
      errors: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  hasError(key) {
    return this.state.errors.indexOf(key) !== -1;
  }

  handleInputChange(event) {
    var key = event.target.name;
    var value = event.target.value;
    var obj = {};
    obj[key] = value;
    this.setState(obj);
  }

  handleSubmit(event) {
    event.preventDefault();

    //VALIDATE
    let errors = [];
    let expression = null;
    let validity = null;

    //firstname
    expression = /^[a-zA-Z]+$/;
    validity = expression.test(String(this.state.firstname).toLowerCase());

    if (!validity) {
      errors.push("firstname");
    }
    //lastname
    validity = expression.test(String(this.state.lastname).toLowerCase());

    if (!validity) {
      errors.push("lastname");
    }
    //email
    expression = /\S+@\S+/;
    validity = expression.test(String(this.state.email).toLowerCase());

    if (!validity) {
      errors.push("email");
    }
    //phno
    expression = /^\d{10}$/;
    validity = expression.test(String(this.state.phno).toLowerCase());

    if (!validity) {
      errors.push("phno");
    }
    //message
    validity = this.state.message.length<10 ? true : false ;

    if (validity) {
      errors.push("message");
    }

    this.setState({
      errors: errors
    });

    if (errors.length > 0) {
      return false;
    } else {
      alert("everything good. submit form!");
    }
  }

  render() {
    console.log(this.state);
    return (
        <Aux>
            <Container>
                <Row className="mt-5 mb-5">
                    <h1><u>Contact Me :</u></h1>
                </Row>

                <form className="row" >
                  

                  {/* First Name */}
                  <div className="col-md-4">
                    <label htmlFor="firstname">First Name</label>
                    <input
                      className={
                        this.hasError("firstname")
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      name="firstname"
                      value={this.state.firstname}
                      placeholder="ABC"
                      onChange={this.handleInputChange}
                    />
                    <div
                      className={
                        this.hasError("firstname") ? "inline-errormsg" : "hidden"
                      }
                    >
                      Please enter a First name
                    </div>
                  </div>

                  {/* Last Name */}
                  <div className="col-md-4">
                    <label htmlFor="lastname">Last Name</label>
                    <input
                      className={
                        this.hasError("lastname")
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      name="lastname"
                      value={this.state.lastname}
                      placeholder="XYZ"
                      onChange={this.handleInputChange}
                    />
                    <div
                      className={
                        this.hasError("lastname") ? "inline-errormsg" : "hidden"
                      }
                    >
                      Please enter a Last name
                    </div>
                  </div>

                  {/* Email */}
                  <div className="col-12 col-md-8 mt-2">
                    <label htmlFor="email">Email</label>
                    <input
                      autoComplete="off"
                      className={
                        this.hasError("email")
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      name="email"
                      value={this.state.email}
                      placeholder="abc123@gmail.com"
                      onChange={this.handleInputChange}
                    />
                    <div
                      className={this.hasError("email") ? "inline-errormsg" : "hidden"}
                    >
                      Email is invalid or missing
                    </div>
                  </div>

                  {/* Phone No */}
                  <div className="col-12 col-md-8 mt-2">
                    <label htmlFor="phno">Phone No</label>
                    <input
                      autoComplete="off"
                      className={
                        this.hasError("phno")
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      name="phno"
                      type="number"
                      value={this.state.phno}
                      placeholder="9876543210"
                      onChange={this.handleInputChange}
                    />
                    <div
                      className={this.hasError("phno") ? "inline-errormsg" : "hidden"}
                    >
                      Phone No. is invalid or missing
                    </div>
                  </div>

                  {/* Message */}
                  <div className="col-12 col-md-8 mt-2">
                    <label htmlFor="message">Message</label>
                    <textarea
                      autoComplete="off"
                      className={
                        this.hasError("message")
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      name="message"
                      rows="8"

                      value={this.state.message}
                      placeholder="Your Message"
                      onChange={this.handleInputChange}
                    ></textarea>
                    <div
                      className={this.hasError("message") ? "inline-errormsg" : "hidden"}
                    >
                      Please enter your Message
                    </div>
                  </div>


                  {/* Button */}
                  <div className="col-lg-12  padd-top">
                    <button className="btn btn-secondary mt-3" onClick={this.handleSubmit}>
                      Submit
                    </button>
                  </div>
                  
                </form>


            </Container>


        </Aux>
        
    )
  }
}


export default Contact;