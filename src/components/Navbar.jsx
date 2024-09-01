import '../styles/navbar.css';
import logo from '../assets/logo.png'; // Assuming your logo image is in the assets folder

function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">
        {/* <img src={logo} alt="Porsche Logo" className="logop" /> */}
        <a className="txnavbar" href="https://porsche.com">Porsche</a>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#models">Models</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
