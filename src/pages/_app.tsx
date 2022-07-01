import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'

import { GlobalStyle } from 'styles/global-style'
import { theme } from 'styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
