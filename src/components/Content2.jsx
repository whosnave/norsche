import "../styles/content2.css";
import pors1 from "../assets/718.png";
import pors2 from "../assets/911.png";
import pors3 from "../assets/taycan.png";

function Content2() {
  return (
    <>
      <div id="models">
        <h1 className="headc2">Find your perfect models</h1>
      </div>
      <div className="types">

      <ul>
        <li>
          <h2>
          Porsche 718
            </h2>
          <img className="pors1" src={pors1} alt="image" />
        </li>
        <li>
            <h2>
                Porsche 911
            </h2>
          <img className="pors2" src={pors2} alt="image" />
        </li>
        <li>
            <h2>
                Porsche Taycan
            </h2>
          <img className="pors3" src={pors3} alt="image" />
        </li>
      </ul>
      </div>
    </>
  );
};

export default Content2;
