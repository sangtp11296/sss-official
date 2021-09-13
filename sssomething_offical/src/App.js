import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
// import Footer from './components/Layout/Footer/Footer';
import About from "./Pages/About/About";
import Login from "./Pages/Account/Login";
import Register from "./Pages/Account/Register";
import LandingPage from './Pages/LandingPage/LandingPage';
import Home from "./Pages/Home/Home";
import Write from "./Pages/Write/Write";
import SinglePost from "./components/SinglePost/SinglePost";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { useContext, useState } from "react";
import { Context } from "./context/Context";

function App() {
  const {user} = useContext(Context);
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
          <Home setWhiteHeaderCallback={setWhiteHeaderFunction}/>
        </Route>
        <Route path="/photography">
          <LandingPage section='Photography' setWhiteHeaderCallback={setWhiteHeaderFunction}/>
        </Route>
        <Route path="/explore">
          <LandingPage section='Explore'setWhiteHeaderCallback={setWhiteHeaderFunction}/>
        </Route>
        <Route path="/photographers">
          <LandingPage section='Photographers'setWhiteHeaderCallback={setWhiteHeaderFunction}/>
        </Route>
        <Route path="/challenge">
          <LandingPage section='Challenge'setWhiteHeaderCallback={setWhiteHeaderFunction}/>
        </Route>
        <Route path="/book">
          <LandingPage section='Book'setWhiteHeaderCallback={setWhiteHeaderFunction}/>
        </Route>
        <Route path="/music">
          <LandingPage section='Music'setWhiteHeaderCallback={setWhiteHeaderFunction}/>
        </Route>
        <Route path="/life">
          <LandingPage section='Life'setWhiteHeaderCallback={setWhiteHeaderFunction}/>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/:LandingPage/:postId">
           <SinglePost setWhiteHeaderCallback={setWhiteHeaderFunction}/>
        </Route>
        <Route path='/login'>
          {user ? <Home setWhiteHeaderCallback={setWhiteHeaderFunction}/> : <Login setWhiteHeaderCallback={setWhiteHeaderFunction}/>}
        </Route>
        <Route path='/register'>
          <Register setWhiteHeaderCallback={setWhiteHeaderFunction}/>
        </Route>
        <Route path="/write">
          {user ? <Write setWhiteHeaderCallback={setWhiteHeaderFunction}/> : <Login setWhiteHeaderCallback={setWhiteHeaderFunction}/>}
        </Route>
      </Switch>
      {/* <Footer/> */}
    </Router>
  )
}

export default App;
