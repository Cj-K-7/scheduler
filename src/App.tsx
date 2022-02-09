import Schedular from "./Schedular";
import { GlobalStyle } from "./styles/globalStyle";
import { useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { isDarkAtom } from './atoms';
import { darkTheme, lightTheme } from './styles/theme';

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Schedular />
    </ThemeProvider>
  );
}

export default App;
