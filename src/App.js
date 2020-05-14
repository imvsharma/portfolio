import React from 'react';
import Menu from './components/menu/menu';
 import Home from './components/Home/home';
/*import Contact from './components/contact/contact'; */
import './App.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light',
    }
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    const theme = this.state.theme === 'dark' ? 'light' : 'dark';
    this.setState({ theme });
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem('theme', theme);
  }

  componentDidMount() {
    let theme = localStorage.getItem('theme') !== undefined ? localStorage.getItem('theme'): 'light' ;
    this.setState({ theme });
    document.documentElement.setAttribute("data-theme", theme);
  }

  render () {
    return (
      <div className="App" >
        
        {/* <button className="toggle" onClick={this.toggleTheme}></button> */}
      <header className="App-header">
    <button className="toggle" onClick={this.toggleTheme}>{this.state.theme === 'dark' ? 'Light' : 'Dark'} Theme</button>
        <Menu />
        <Home />
        {/* 
        <Contact /> */}
      </header>
    </div>
  );
  }
  
}


