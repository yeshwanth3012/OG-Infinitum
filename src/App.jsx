import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Ecosystem from './pages/Ecosystem.jsx'
import PillarPage from './pages/PillarPage.jsx'
import Partners from './pages/Partners.jsx'
import CounsellorNetwork from './pages/CounsellorNetwork.jsx'
import Contact from './pages/Contact.jsx'
import Leadership from './pages/Leadership.jsx'
import Privacy from './pages/Privacy.jsx'
import Careers from './pages/Careers.jsx'
import Internships from './pages/Internships.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/pillars/:slug" element={<PillarPage />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/institutions" element={<Navigate to="/partners" replace />} />
          <Route path="/impact" element={<Navigate to="/" replace />} />
          <Route path="/resources" element={<Navigate to="/" replace />} />
          <Route path="/counsellor-network" element={<CounsellorNetwork />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
