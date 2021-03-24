import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

import MarvelResponseProvider from '../context/MarvelResponseContext';

function MyApp({ Component, pageProps }) {
  return (
    <MarvelResponseProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </MarvelResponseProvider>
  )
}

export default MyApp