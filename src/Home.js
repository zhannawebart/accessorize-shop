import { useState } from 'react';
import { dataSlider } from './dataSlider';
import btnLeft from './btn-left.png';
import btnRight from './btn-right.png';
import './App.css';

import instagram from './instagram.png';
import twitter from './twitter.png';
import whatsapp from './whatsapp.png';

function App() {
    const [firstPlace, setPlace] = useState(0);
    const {image, name} = dataSlider[firstPlace];
    //console.log(africa[firstPlace]);

    const nextPicture = () => {
    setPlace((firstPlace => {
        firstPlace ++;
        if (firstPlace > dataSlider.length -1) {
            firstPlace = 0;
        }
        return firstPlace;
        }))
    }

    const previousPicture = () => {
        setPlace((firstPlace => {
            firstPlace --;
            if (firstPlace < 0) {
            return dataSlider.length -1;
            }
        return firstPlace;
        }))
    }

    return (
        <div>
        <div className="container">
            <h1>Beauty in details</h1>
            <div className="pictures-carousel">
                <button onClick={previousPicture} className="carousel-btn"><img src={btnLeft} width="30px" alt="arrow"/></button>
                <img className="img-mobile" src={image} width="1200px" alt="style"/>
                <button onClick={nextPicture} className="carousel-btn"><img src={btnRight} width="30px" alt="arrow"/></button>
            </div>
            <h5>{name}</h5>
        </div>
        <br></br>
        <div className="footer">
            <h4>We are on social networks:</h4>
            <div className="footer-box">
                <img className="img-icons" src={instagram} alt="style"/>
                <img className="img-icons" src={twitter} alt="style"/>
                <img className="img-icons" src={whatsapp} alt="style"/>
            </div>
        </div>
    </div>
    );
}

export default App;