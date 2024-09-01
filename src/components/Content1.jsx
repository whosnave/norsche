import "../styles/content1.css";
import image from '../assets/background.gif';

function Content1() {
  return (
    <>
    <div id="home">
      <a className="head" href="https://porsche.com">Porsche.</a>
      <div className="container">
        <img className="bgimg" src={image} alt="Background" />
      </div>
    </div>
    </>
  );
}

export default Content1;
