import React, {Component} from 'react';
import './menu.scss'

export default class Menu extends Component {
  render () {
    return (
        <div className="menu-container">
            <div className="logo">
                Vaibhav Sharma
            </div>
            <div className="menu">
                <div className="menu-item active">Home</div>
                <div className="menu-item">About</div>
                <div className="menu-item">Skills</div>
                <div className="menu-item last">Contacts</div>
                <div className="briefme">
                    brief me
                </div>
                
            </div>
        </div>
    )
}
}