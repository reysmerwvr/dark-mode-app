/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import ThemeContext from '../../context/theme/ThemeContext';

class Header extends Component {
  render() {
    const { logo, children } = this.props;
    return (
      <ThemeContext.Consumer>
        {
          ({ theme, changeTheme }) => (
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <button type="button" onClick={() => changeTheme(theme === 'light' ? 'dark' : 'light')}>Change Mode</button>
              { children }
            </header>
          )
        }
      </ThemeContext.Consumer>
    );
  }
}

export default Header;
