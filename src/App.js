import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Header from './Header';
import Welcome from "./Welcome";
import Game from './Game';
import Overview from "./Overview";
import CookingMethod from './CookingMethod';
import ThankYou from './ThankYou';
import Footer from "./Footer";


function App() {
  return (
    <Router>
      <header>
        <Header />
      </header>
      <div className="main">
        <Routes>
          <Route exact path="/" element={<Welcome />}></Route>
          <Route path="/game" element={<Game />}></Route>
          <Route path="/overview" element={<Overview />}></Route>
          <Route path="/cooking-method" element={<CookingMethod />}></Route>
          <Route path="/thank-you" element={<ThankYou />}></Route>
        </Routes>
      </div>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
