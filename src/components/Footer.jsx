import '../styles/footer.css';
import pixel from "../assets/pixelporsc.png";



function Footer() {
    return (
        <>
        <div id="contact">
        <footer className='footer'>
            <div className='footer-content'>
                <div className='footer-section'>
                    <h3>Follow Us</h3>
                    <ul>
                        <li><a href='https://popcat.click/' target='_blank' rel='noopener noreferrer'>Instagram</a></li>
                        <li><a href='https://popcat.click/' target='_blank' rel='noopener noreferrer'>Twitter</a></li>
                        <li><a href='https://popcat.click/' target='_blank' rel='noopener noreferrer'>WhatsApp</a></li>
                    </ul>
                </div>
                <div className='footer-section'>
                    <h3>The Creator</h3>
                    <p>boom boom click ⇩</p>
                    <p className='wm'>made by nave</p>
                    <img className="pixel" src={pixel} alt="image" />
                    
                </div>
                <div className='footer-section'>
                    <h3>Contact Us</h3>
                    <p>Email: gmail@gmail.com
                        <br />Number: 0800800200308
                    </p>
                </div>
            </div>
            <div className='footer-bottom'>
                <p>&copy; 2024 Porsche. All rights reserved.</p>
            </div>
        </footer>
        </div>
        </>
    );
}

export default Footer;
