import {
    Provider as PaperProvider,
    DefaultTheme as PaperDefaultTheme,
    DarkTheme as PaperDarkTheme
  } from 'react-native-paper';
  import {
    NavigationContainer,
    DefaultTheme as NavigationDefaultTheme,
    DarkTheme as NavigationDarkTheme
  } from '@react-navigation/native'; 
  
  const CustomDefaultTheme = {    ...NavigationDefaultTheme,    ...PaperDefaultTheme,    colors: {      ...NavigationDefaultTheme.colors,      ...PaperDefaultTheme.colors,      background: '#ffffff',      trans: '#a7aaa7',      line: '#a7aaa7',      text: '#333333',      textwhite: '#fff',      primary: '#76b729',      second_primary: '#fbb900',      third_primary: '#3399FF',      fourth_primary: '#9d9d9c',  fiv_primary: '#43caca',   title: '#deecc6',      boxborder: '#999',    }  }

 
const CustomDarkTheme = {    ...NavigationDarkTheme,    ...PaperDarkTheme,    colors: {      ...NavigationDarkTheme.colors,      ...PaperDarkTheme.colors,      background: '#333333',      trans: '#ffffff',      line: '#a7aaa7',      text: '#ffffff',      textwhite: '#333333',      primary: '#76b729',      second_primary: '#fbb900',      third_primary: '#3399FF',      fourth_primary: '#9d9d9c',   fiv_primary: '#43caca',   title: '#333333',      boxborder: '#999'    }  }
export default colors= CustomDefaultTheme.colors;

