import '@/styles/globals.css'
import Layout from '@/components/Layout'
import Navbar from '@/components/Navbar'

export default function App({ Component, pageProps }) {
  return(
    <Layout>
      <Navbar/>
       <Component {...pageProps} />
    </Layout>
  ) 
}
