import React, { Component, createContext } from "react"; 
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeContext } from './ThemeContext';
import { themeState } from '../types'; 
import { lightTheme,darkTheme} from './theme';

type State = {
  user: any;
  isAuthenticated: boolean;
  theme: any,
  isDarkMode: boolean,
  toggleTheme: any,
}

export class ThemeProvider extends Component<{}, State> {
  state: State = {
    user: {},
    isAuthenticated: false,
    theme: lightTheme,
    isDarkMode: false,
    toggleTheme: null,
  };

  constructor(props: {}) {
    super(props);
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  setUserData(user: any,isAuthenticated: boolean){
    this.setState({
      user,isAuthenticated
    });
  }

  toggleTheme() {
    if(this.state.isDarkMode){
      this.setState({
        isDarkMode: false,
        theme: lightTheme
      });
    } else {
      this.setState({ 
        isDarkMode: true,
        theme: darkTheme
      });
    }
  }

  render() {
    return (
      <StyledThemeProvider theme={this.state.theme}>
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
      </StyledThemeProvider>
    );
  }
}
