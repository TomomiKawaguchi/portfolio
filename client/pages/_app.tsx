import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { initializeFirebaseApp } from '@/lib/firebase'
import { getApp, getApps, initializeApp } from 'firebase/app'


function MyApp({ Component, pageProps }: AppProps) {
initializeFirebaseApp();
  // console.log(getApp());
  return (
    <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
)
}
export default MyApp




// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }
