import './App.css'
import Home from './components/Home'
import About from './components/About'
import Features from './components/Features'
import CTA from './components/Cta'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import Popup from './components/Popup.jsx'

function App() {
  return (
    <>
      <Popup />
      <Home />
      <About />
      <Features />
      <CTA />
      <Testimonial />
      <Footer />
    </>
  )
}

export default App
