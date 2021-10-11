import "./App.css";
import "react-icons";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
function App() {
  return (
    <div className="hero">
      <h1 className="fancy">
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
  );
}

export default App;
