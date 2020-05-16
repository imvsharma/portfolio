import React, { Component } from "react";
import { Language, Settings, Dns, PhoneIphone, AcUnit, GitHub } from '@material-ui/icons';
import "./skills.scss";

export default class Skills extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="heading">Skill - Set <hr className="hr" /></div>
        <div className="container">
          <div >
            <Language className="mat-icon" />
            <div className="skill-heading">Web Development</div>
            <div className="skill-content">Exprience in modern web technologies. Updated frontend skills as per market. Innovative optimized solution seeker.</div>
            <div className="skill"> 
              <div>HTML5,</div> 
              <div>CSS3,</div> 
              <div>JavaScript,</div>
              <div>LESS,</div>
              <div>TypeScript,</div>
              <div>Bootstrap,</div>
              <div>Angular 2+,</div>
              <div>React JS,</div>
              <div>Vue JS</div>
            </div>
          </div>
          <div >
            <Dns className="mat-icon" />
            <div className="skill-heading">Back-end Development</div>
            <div className="skill-content">Exprience in modern web technologies. Updated frontend skills as per market. Innovative optimized solution seeker.</div>
            <div className="skill"> 
              <div>Micro-services,</div> 
              <div>Node JS,</div> 
              <div>Java,</div>
              <div>Python,</div>
              <div>Dart,</div>
              <div>Express JS,</div>
              <div>Spring Boot,</div>
              <div>MongoDB,</div>
              <div>PostgreSQL</div>
            </div>
          </div>
          <div >
            <PhoneIphone className="mat-icon" />
            <div className="skill-heading">App Development</div>
            <div className="skill-content">Exprience in modern web technologies. Updated frontend skills as per market. Innovative optimized solution seeker.</div>
            <div className="skill"> 
              <div>Android,</div> 
              <div>Flutter,</div> 
              <div>React Native,</div>
              <div>Ionic,</div>
              <div>Native Script</div>
            </div>
          </div>
          <div >
            <AcUnit className="mat-icon" />
            <div className="skill-heading">DevOps</div>
            <div className="skill-content">Exprience in modern web technologies. Updated frontend skills as per market. Innovative optimized solution seeker.</div>
            <div className="skill"> 
              <div>Gradle,</div> 
              <div>Maven,</div>
              <div>Jenkins,</div> 
              <div>Docker,</div>
              <div>Kubernetes,</div>
              <div>Ansible</div>
            </div>
          </div>
          <div >
            <GitHub className="mat-icon" />
            <div className="skill-heading">Version Control</div>
            <div className="skill-content">Exprience in modern web technologies. Updated frontend skills as per market. Innovative optimized solution seeker.</div>
            <div className="skill"> 
              <div>Git,</div> 
              <div>Github,</div> 
              <div>Bitbucket,</div>
              <div>SVN</div>
            </div>
          </div>
          <div >
            <Settings className="mat-icon" />
            <div className="skill-heading">Testing & Tools</div>
            <div className="skill-content">Exprience in modern web technologies. Updated frontend skills as per market. Innovative optimized solution seeker.</div>
            <div className="skill"> 
              <div>Mocha,</div> 
              <div>Chai,</div> 
              <div>JavaScript,</div>
              <div>Jest,</div>
              <div>Enzyme,</div>
              <div>Postman,</div>
              <div>Jira</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
