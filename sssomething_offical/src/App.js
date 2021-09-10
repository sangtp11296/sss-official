import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import Footer from './components/Layout/Footer/Footer';
import About from "./Pages/About/About";
import Login from "./Pages/Account/Login";
import Register from "./Pages/Account/Register";
import LandingPage from './Pages/LandingPage/LandingPage';
import Home from "./Pages/Home/Home";
import Write from "./Pages/Write/Write";
import SinglePost from "./components/SinglePost/SinglePost";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { useState } from "react";

function App() {
  const [whiteheader,setWhiteHeader] = useState(false);
  
  const setWhiteHeaderFunction = (childData) =>{
      setTimeout(()=>setWhiteHeader(childData))
  }
  return (
    <Router>
      <ScrollToTop/>
      <Header whiteHeader={whiteheader}/>
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/photography">
          <LandingPage section='Photography' />
        </Route>
        <Route path="/explore">
          <LandingPage section='Explore'/>
        </Route>
        <Route path="/photographers">
          <LandingPage section='Photographers'/>
        </Route>
        <Route path="/challenge">
          <LandingPage section='Challenge'/>
        </Route>
        <Route path="/book">
          <LandingPage section='Book'/>
        </Route>
        <Route path="/music">
          <LandingPage section='Music'/>
        </Route>
        <Route path="/life">
          <LandingPage section='Life'/>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/:LandingPage/:postId">
           <SinglePost/>
        </Route>
        <Route path='/login'>
          <Login setWhiteHeaderCallback={setWhiteHeaderFunction}/>
        </Route>
        <Route path='/register'>
          <Register setWhiteHeaderCallback={setWhiteHeaderFunction}/>
        </Route>
        <Route path="/write">
          <Write setWhiteHeaderCallback={setWhiteHeaderFunction}/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  )
}

export default App;
