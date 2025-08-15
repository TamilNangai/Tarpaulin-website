import Navbar from './Navbar'
import Contactus from './Contactus'
import imageproduct from './assets/contactus/Producthero.png'
import Feature from'./Feature'
import Component from'./Component'
import Footer from './Footer'
function App() {

  return (
    <>
    <div>
     <Navbar/>
     <Contactus heroimage={imageproduct}/>
     <Feature/>
     <Component/> 
     <Footer/>
    </div>
    </>
    );
    }
    export default App;
