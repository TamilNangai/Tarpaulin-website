import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Hero'
import Images from './Images'
import Button from './Button'
import Our from './Our'
import About from './About'
import Why from './Why'
import Contact from './Contact'

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Images />
      <Button />
      <Our />
      <Why />
      <Contact />
    </div>
  )
}

export default Home