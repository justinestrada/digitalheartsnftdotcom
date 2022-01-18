import '../styles/globals.css'

import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }) {
  const APP_ID = "IEPIlwlUejgQ5F0BufKGybuxI0NX4382tKIV1x4V"
  const SERVER_URL = "https://ggprzp7ux30w.usemoralis.com:2053/server"
  // const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID
  // const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL
  console.log(APP_ID, SERVER_URL)
	return (
    <MoralisProvider
      appId={APP_ID}
      serverUrl={SERVER_URL}>
      <Component {...pageProps} />
    </MoralisProvider>
	)
}

export default MyApp
