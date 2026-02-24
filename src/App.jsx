import Header from './components/Header'
import Hero from './components/Hero'
import Cabinet from './components/Cabinet'
import Competences from './components/Competences'
import TextReveal from './components/TextReveal'
import Fondateur from './components/Fondateur'
import Actualites from './components/Actualites'
import Participations from './components/Participations'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWidgets from './components/FloatingWidgets'

function App() {
  return (
    <>
      <Header />
      <FloatingWidgets />
      <main>
        <Hero />
        <Cabinet />
        <Competences />
        <TextReveal />
        <Fondateur />
        <Actualites />
        <Participations />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
