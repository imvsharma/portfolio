import React, { Component } from "react";
import "./contact.scss";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <div className="heading">Get in touch <br /> with me</div>
        <div className="container">
          <div className="info">
          <div className="input-container"><input placeholder="Your name"/></div>
          <div className="input-container"><input placeholder="Your email"/></div>
          <div className="input-container"><textarea placeholder="Your comment" rows="5"/></div>
          <div className="btn">Send message</div>
          </div>
          <div className="submittext">
            <div>
            Feel like contacting us ? 
            Your idea can become the change you've 
            been dying to make. Let's give it and you all possible chances of success
            Submit your queries here.
            </div>
            <div className="social-links">
              <div className="left">Linkedin</div>
              <div>Github</div>
              <div>Stack Overflow</div>
              <div className="email">Email<span className="tooltiptext">vsvaibhav2016@gmail.com</span></div>
              <div className="right phone">Mobile No.<span className="tooltiptext">+91 964 333 0102</span></div>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}
