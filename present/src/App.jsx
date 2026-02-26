import Presentation from './components/Presentation'
import CoverSlide from './components/slides/CoverSlide'
import IntroSlide from './components/slides/IntroSlide'
import CompetitorSlide from './components/slides/CompetitorSlide'
import ImproveSlide from './components/slides/Improve'
import SkillsSlide from './components/slides/Skills'
import PlansSlide from './components/slides/Plans'
import Plans2Slide from './components/slides/Plans2'
import Plans3Slide from './components/slides/Plans3'
import QASlide from './components/slides/QA'

const slides = [
  CoverSlide,
  // IntroSlide,
  CompetitorSlide,
  ImproveSlide,
  SkillsSlide,
  PlansSlide,
  Plans2Slide,
  Plans3Slide,
  QASlide,
]

function App() {
  return <Presentation slides={slides} />
}

export default App
