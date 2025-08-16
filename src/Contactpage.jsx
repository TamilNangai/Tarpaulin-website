import Contactus from './Contactus'
import Contact from './Contact'
import Conductusimage from './assets/contactus/Contactus.png'
function Contactpage() {
  return (
    <>
      <div>
        <Contactus heroimage={Conductusimage} />
        <Contact />
      </div>
    </>
  )
}

export default Contactpage