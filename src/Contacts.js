import instagram from './instagram.png';
import twitter from './twitter.png';
import whatsapp from './whatsapp.png';
import HandsImage from './hands.jpg';

function Contacts () {
    return (
        <div>
            <h2 className="contact-header">Please fill in the form</h2>
            <div className="form-container">
                <div className="form-box-row">
                    <form className="form-box-column" action="https://formspree.io/f/mzbwkwpy" method="POST">
                        <input type="hidden" name="_language" value="en"/>
                        <input type="text" id="userName" placeholder="Your name" className="box" required=""/>
                        <input type="email" id="userEmail" placeholder="Your email" className="box" required=""/>
                        <textarea name="message" id="userComment" placeholder="Your comment" className="big-input" required=""></textarea>
                        <input type="submit" value="SUBMIT" className="form-btn"/>
                    </form>
                    <div>
                        <img className="form-image" src={HandsImage} alt="girl"/>
                    </div> 
                </div>
            </div> 


            <div className="footer">
                <h4>We are on social networks:</h4>
                <div className="footer-box">
                    <img className="img-icons" src={instagram} alt="style"/>
                    <img className="img-icons" src={twitter} alt="style"/>
                    <img className="img-icons" src={whatsapp} alt="style"/>
                </div>
            </div>
        </div>
    )
}

export default Contacts;