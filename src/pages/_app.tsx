import type { AppProps } from 'next/app'
// import { QueryClientProvider } from 'react-query'

// import { queryClient } from '../common/api'
// import { Authenticator, GlobalStyle } from '../common/components'
import { GlobalStyle } from '../common/components'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <QueryClientProvider client={queryClient}> */}
      <GlobalStyle />
      {/* <Authenticator> */}
      <Component {...pageProps} />
      {/* </Authenticator> */}

      {/* </QueryClientProvider> */}
    </>
  )
}

export default CustomApp
