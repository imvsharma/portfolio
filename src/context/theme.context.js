import React, { useState, createContext, Component } from 'react';

export const ThemeContext = createContext();

export class ThemeProvider extends Component {
  
  render () {
    const theme = {
      light: {
        type: 'light',
        backgroundColor: 'red',
        primary: "#70f6a9",
        color: "#23272D"
      },
      dark:{
        type: 'dark',
        backgroundColor: '#23272D',
        primary: "#70f6a9",
        color: "#ffffff"
      },
    }

    const setTheme = type => {
      setState({
        ...state,
        theme: type === 'dark' ? theme.dark : theme.light
      })
    }

    const initState = {
      theme: theme.light,
      setTheme: setTheme
    }

    const [state, setState] = useState(initState)

    return (
      <ThemeContext.Provider value={this.props.theme}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

