import React from 'react';

const ThemeContext = React.createContext(null);

class A extends React.Component {
  render() {
    return (
        <ThemeContext.Provider value={'green'}>
          <D />
        </ThemeContext.Provider>
    ); 
  }
}

const D = (props) =>
  <div>
    <C />
  </div>

class C extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {coloredTheme =>
          <div style={{ color: coloredTheme }}>
            Hello World
          </div>
        }
      </ThemeContext.Consumer>
    );
  }
}

export default A;