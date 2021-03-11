import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import About from './Components/About/About';
import Gallery from './Components/Gellery/Gallery/Gallery';
import Contact from './Components/Contact/Contact';
import Blog from './Components/Blog/Blog';

function App() {
  return (
    <div>
      
      <Router>
        <Switch>

          <Route path='/home'>
            <Home></Home>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path='/about'>
            <About></About>
          </Route>

          <Route path='/gallery'>
            <Gallery></Gallery>
          </Route>

          <Route path='/contact'>
            <Contact></Contact>
          </Route>

          <Route path='/blog'>
            <Blog></Blog>
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
