import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import './header.css'
import './footer.css'

export default function Layout() {
  return (
    <div className="site">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
