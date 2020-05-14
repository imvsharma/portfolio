import React, { Component } from "react";
import "./home.scss";
import Icon from "../../icons";

export default class Menu extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="heading">About me</div>
        <div className="container">
          <div className="info">
            I'm a <strong className="highlight">Fullstack Developer</strong> for
            Altran Pvt Ltd in Bengaluru, India. I have serious passion for UI
            effects, animations and creating intuitive, dynamic user
            experiences.
            <br />
            <br />
            As a developer, I try to trigger emotions through digital interfaces
            using code. Let's make something special. I am passionate about
            building excellent software that improves the lives of those around
            me.
            <div className="current-focus">
              <strong>Currently Focus :  </strong>
              <span className="highlight">
                Angular, React, Node JS, NoSQL Databases, Serverless APIs
              </span>
            </div>
          </div>
          <div className="icon">
            <div className="iconitem">
              <div className="iconcontainer">
                <Icon name="pencil" />
                <div>Pixel Perfect Design</div>
              </div>
            </div>

            <div className="iconitem">
              <div className="iconcontainer">
                <Icon name="diamond" />
                <div>World Class Apps</div>
              </div>
            </div>

            <div className="iconitem">
              <div className="iconcontainer">
                <Icon name="design" />
                <div>Repaint Accordingly</div>
              </div>
            </div>

            <div className="iconitem">
              <div className="iconcontainer">
                <Icon name="love" />
                <div>Develop With Love</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
