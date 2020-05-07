import React from 'react';
import Menu from './components/menu/menu';
import Home from './components/Home/home';
import Contact from './components/contact/contact'
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <Home />
        <Contact />
      </header>
    </div>
  );
}

export default App;
