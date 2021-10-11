import "./App.css";
import "react-icons";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import Div100vh from "react-div-100vh";

function App() {
  return (
    <Div100vh>
      <div className="hero">
        <h1 className="noselect fancy">
          Make It <span>Real</span>
        </h1>
        <div className="social">
          <a href="http://instagram.com/meal.nutrition/" className="grow">
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/Meal-Nutrition-103380868361404"
            className="grow"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.youtube.com/channel/UCWNtk7ynCuq42KCb9aXt48w"
            className="grow"
          >
            <FaYoutube />
          </a>
        </div>
        <footer>© 2021 Meal Nutrition. All Rights Reserved.</footer>
      </div>
    </Div100vh>
  );
}

export default App;
