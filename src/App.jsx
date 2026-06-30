import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import FloatingButtons from './components/FloatingButtons/FloatingButtons'
import Home from './pages/Home'
import About from './pages/About'
import Fleet from './pages/Fleet'
import Pricing from './pages/Pricing'
import Services from './pages/Services'
import Contact from './pages/Contact'
import BookCar from './pages/BookCar'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="w-full overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/"        element={<Home />}     />
          <Route path="/about"   element={<About />}    />
          <Route path="/fleet"   element={<Fleet />}    />
          <Route path="/pricing" element={<Pricing />}  />
          <Route path="/services"element={<Services />} />
          <Route path="/contact" element={<Contact />}  />
          <Route path="/book"    element={<BookCar />}  />
        </Routes>
        <Footer />
      </div>
      <FloatingButtons />
    </BrowserRouter>
  )
}
