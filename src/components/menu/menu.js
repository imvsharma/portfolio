import React, {Component} from 'react';
import './menu.scss';
import Icon from '../../icons'

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuHide: true
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    toggleMenu () {
        console.log('click')
        this.setState({
            menuHide: !this.state.menuHide
        })
    }
  render () {
    return (
        <div className="menu-container">
            <div className="logo">
                Vaibhav Sharma
            </div>
            
                {this.state.menuHide === true ? <div onClick={this.toggleMenu} className="menu"><Icon name="menu" className="menu-logo"/></div> : <div onClick={this.toggleMenu} className="menu"><Icon name="cross" className="menu-logo"/></div>}
            
                {/* <div className="menu-item active">Home</div>
                <div className="menu-item">About</div>
                <div className="menu-item">Skills</div>
                <div className="menu-item last">Contacts</div>
                <div className="briefme">
                    brief me
                </div> */}
                
            
        </div>
    )
}
}