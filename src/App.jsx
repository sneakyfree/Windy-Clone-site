import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import VoiceLegacy from './components/VoiceLegacy'
import ProviderShowcase from './components/ProviderShowcase'
import Pricing from './components/Pricing'
import Ecosystem from './components/Ecosystem'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import EmotionalCTA from './components/EmotionalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-windy-darker text-white">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <VoiceLegacy />
      <ProviderShowcase />
      <Pricing />
      <Ecosystem />
      <Testimonials />
      <FAQ />
      <EmotionalCTA />
      <Footer />
    </div>
  )
}

export default App
