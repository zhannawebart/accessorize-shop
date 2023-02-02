import { useState } from "react";
import { dataGoods } from "./dataGoods";
import Buttons from "./buttons";
import Clothes from "./clothes";

import instagram from './instagram.png';
import twitter from './twitter.png';
import whatsapp from './whatsapp.png';

function Home() {
    const [goods, setGoods] = useState(dataGoods);

    const sortGoods = (searchTerm) => {
        const newGoods = dataGoods.filter(element => element.searchTerm === searchTerm);            //новый массив создаем,т.к.используем метод filter()
        setGoods(newGoods);       //меняем состояние
    }

    return (
        <div>
            <div className='header-container'>
                <h1 className='heading-style'>ACCESSORIZE</h1>
                <h3>Your style is your individuality</h3>
            </div>
            <Buttons filterProp={sortGoods}/>
            <Clothes clothesProp={goods}/>

            <div>
                <div className="footer">
                    <h4>We are on social networks:</h4>
                    <div className="footer-box">
                        <img className="img-icons" src={instagram} alt="style"/>
                        <img className="img-icons" src={twitter} alt="style"/>
                        <img className="img-icons" src={whatsapp} alt="style"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;