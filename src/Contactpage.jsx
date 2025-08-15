import Navbar from './Navbar'
import Contactus from './Contactus'
import Conductusimage from './assets/contactus/Contactus.png'
import Footer from './Footer'
function Contactpage() {
  return (
    <>
    <div>
        <Navbar/>
        <Contactus heroimage={Conductusimage}/> 
        <Footer/>
    </div>
    </>
  )
}

export default Contactpage