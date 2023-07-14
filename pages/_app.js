
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';



export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Navbar/>
      <Component {...pageProps} />
      {/* <Footer/> */}
    </Layout>
  );
}
