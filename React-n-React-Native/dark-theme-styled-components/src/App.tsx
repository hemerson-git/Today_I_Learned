import { ThemeProvider } from 'styled-components';

import usePersistedState from './utils/hooks/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';
import GlobalStyles from '../src/styles/global';
import Header from './components/Header';

function App() {
  const [theme, setTheme] = usePersistedState('theme', light);
  
  function toggleTheme () {
    setTheme(theme.title === 'light' ? dark : light)
  }
  
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Header toggleTheme={toggleTheme}/>
      </div>
    </ThemeProvider>
  );
}

export default App;