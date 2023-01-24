import './App.css'
import CallToAction from './components/CallToAction'
import Carousel from './components/Carousel'
import ContactInfo from './components/ContactInfo'
import Faq from './components/Faq'
import Features from './components/Features'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import WhyChoose from './components/WhyChoose'

function App() {

  return (
    <>
      <Navbar />
      <Carousel />
      <Features />
      <CallToAction />
      <WhyChoose />
      <Faq />
      <ContactInfo />
      <Footer />
    </>
  )
}

export default App
