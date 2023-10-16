import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
// import { initializeFirebaseApp } from '@/lib/firebase'
import { getApp, getApps, initializeApp } from 'firebase/app'
import { AuthProvider } from "@/context/auth";

export default function App({ Component, pageProps }: AppProps) {
  return (
     <AuthProvider>
      <Component {...pageProps} />
     </AuthProvider>
  );
 }
 



// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }
