import Presentation from './components/Presentation'
import CoverSlide from './components/slides/CoverSlide'
import IntroSlide from './components/slides/IntroSlide'
import CompetitorSlide from './components/slides/CompetitorSlide'
import ImproveSlide from './components/slides/Improve'
import SkillsSlide from './components/slides/Skills'

const slides = [
  CoverSlide,
  // IntroSlide,
  CompetitorSlide,
  ImproveSlide,
  SkillsSlide,
]

function App() {
  return <Presentation slides={slides} />
}

export default App
