import '@/styles/globals.css'
import Layout from '@/components/layout/layout'
import { SessionProvider } from 'next-auth/react'
export default function App({ Component, pageProps }) {

  console.log("env NEXT_PUBLIC_APP_TEST " ,process.env.NEXT_PUBLIC_APP_TEST)
  console.log("env APP_TEST2 " ,process.env.APP_TEST2)
  console.log("env NEXT_PUBLIC_APP_TEST2 " ,process.env.NEXT_PUBLIC_APP_TEST2)
  
  return (
    <SessionProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}
