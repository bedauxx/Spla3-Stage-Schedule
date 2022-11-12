import { VFXProvider } from 'react-vfx'
import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <VFXProvider><Component {...pageProps} /><Analytics /></VFXProvider>
}

export default MyApp
