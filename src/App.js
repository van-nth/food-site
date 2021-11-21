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
import Facts from './Facts';
import Footer from "./Footer";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Welcome />}></Route>
        <Route path="/game" element={<Game />}></Route>
        <Route path="/overview" element={<Overview />}></Route>
        <Route path="/cooking-method" element={<CookingMethod />}></Route>
        <Route path="/facts" element={<Facts />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
