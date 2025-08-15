import Navbar from './Navbar'
import Contactus from './Contactus'
import Contact from './Contact'
import Conductusimage from './assets/contactus/Contactus.png'
import Footer from './Footer'
function Contactpage() {
  return (
    <>
    <div>
        <Navbar/>
        <Contactus heroimage={Conductusimage}/> 
        <Contact/>
        <Footer/>
    </div>
    </>
  )
}

export default Contactpage