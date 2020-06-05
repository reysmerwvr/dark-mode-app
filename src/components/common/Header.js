import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../../context/theme/ThemeContext';

const Header = ({ logo, children }) => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <button type="button" onClick={() => changeTheme(theme === 'light' ? 'dark' : 'light')}>Change Mode</button>
      { children }
    </header>
  );
};

Header.propTypes = {
  logo: PropTypes.string,
  children: PropTypes.object,
};

Header.defaultProps = {
  logo: 'light',
  children: {},
};

export default Header;
