import Link from 'next/link'
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';

export default function Layout({ children }) {
  return (
    <div className="layout">
      {/* <header>
        <Link href="/">
                
            </Link>
      </header> */}

      <div className="page-content">
        <Navbar/>
        { children }
        <Footer/>
      </div>

      
    </div>
  )
}