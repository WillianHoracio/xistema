import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'styled-components';
import { Routes } from './src/screens/routes'
import { theme } from './src/styles/theme';

export default function App(){
    return(
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Routes/>
        </NavigationContainer>
      </ThemeProvider>
    )
}