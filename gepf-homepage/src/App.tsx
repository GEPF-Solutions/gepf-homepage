import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import GithubBar from './components/GithubBar'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NotFound from './components/NotFound'

export default function App() {
  if (window.location.pathname !== '/') return <NotFound />

  return (
    <>
      <Cursor />
      <Nav />
      <Hero />
      <Marquee />
      <GithubBar />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
