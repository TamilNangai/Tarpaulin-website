import Carousel from 'react-bootstrap/Carousel';


import D1 from "./assets/heroDv/D1.png"
import D2 from "./assets/heroDv/D2.png"
import D3 from "./assets/heroDv/D3.png"
import D4 from "./assets/heroDv/D4.png"
import D5 from "./assets/heroDv/D5.png"

function Hero() {
    return (
        <>
            <div >
                <Carousel fade interval={2000} controls={false} indicators={false}>
                    <Carousel.Item>
                        <img className="d-block " src={D1} alt="D1" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block" src={D2} alt="D2" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block " src={D3} alt="D3" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block" src={D4} alt="D4" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block " src={D5} alt="D5" />
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
}

export default Hero