import '../styles/navbar.css';

function Navbar() {
  return (
    <>
    <nav className="navbar">
      <a className='txnavbar' href="https://porsche.com">Porsche</a>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#models">Models</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    </>
  );
}

export default Navbar;
