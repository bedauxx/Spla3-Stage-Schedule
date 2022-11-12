import { VFXProvider } from 'react-vfx'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <VFXProvider><Component {...pageProps} /></VFXProvider>
}

export default MyApp
