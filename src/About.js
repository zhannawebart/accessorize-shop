import ModernWoman from "./modern-woman.jpg";

function About() {
    //const [about, setAbout] = useState(dataAbout);
    //const {image, name, description} = dataAbout(about);

    //const [showText, setShowText] = useState(false);
    /*const showTextClick = (item) => {
        item.showMore = !item.showMore
        setShowText(!showText)
    }*/

    return (
        <div className="container">
            <h1>About us</h1>
            <h2 className="margtext">We have been working for 5 years</h2>
            <img className="img-about" src={ModernWoman} width="1000px" alt="woman"/>
            <h3>What is Fashion Accessories?</h3>
            <p className="text-box-about">An accessory which is used to contribute, in a secondary form, to an individual’s outfit is called a fashion accessory. They are either selected to complete an outfit and complement the wearer’s look. They have the power to further express an individual’s identity and personality. Accessories come in different shapes, sizes, hues, etc. The term came into use in the 20th century. Examples of various fashion accessories are jewellery, gloves, handbags, hats, belts, scarves, watches, sunglasses, pins, stockings, bow ties, leggings, ties, suspenders, and tights. Accessories add various elements such as color, style and class to an outfit, and create a certain look, but they may also have practical functions.</p>
        </div>
    )
}

export default About;