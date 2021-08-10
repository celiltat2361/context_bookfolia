import React from 'react';

export const ThemeContext = React.createContext();

class ThemeContextProvider extends React.Component {

  state = {
   isDarkTheme: true,
   dark: {
     bg: '#222529', txt: '#D65F5F', hover: 'rgba(231, 76, 60, 0.8)'
   },
   light: {
    bg: '#f8f9fa', txt: '#222529', hover: 'rgba(254, 209, 54, 0.8)'
   }
  }

  changeTheme = () => {
    this.setState({ isDarkTheme: !this.state.isDarkTheme }); //durumun tersine göre degistirir
  }

  render() {
    return (
      <ThemeContext.Provider value={{...this.state, changeTheme: this.changeTheme}}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }


}

// console.log(myContext);

export default ThemeContextProvider;