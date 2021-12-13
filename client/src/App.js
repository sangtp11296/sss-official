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
// import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { useContext, useState } from "react";
import { Context } from "./context/Context";
import Edit from "./Pages/Write/Edit";
import Profile from "./Pages/About/Profile";

function App() {
  const {user} = useContext(Context);
  const [whiteheader,setWhiteHeader] = useState(false);
  
  const setWhiteHeaderFunction = (childData) =>{
      setTimeout(()=>setWhiteHeader(childData))
  }
  
  return (
    <Router>
      {/* <ScrollToTop/> */}
      <Switch>
        <Route path="/" exact={true}>
          <Header whiteHeader={whiteheader}/>
          <Home setWhiteHeaderCallback={setWhiteHeaderFunction}/>
        </Route>
        <Route path="/photography">
          <Header whiteHeader={whiteheader}/>
          <LandingPage section='photography' setWhiteHeaderCallback={setWhiteHeaderFunction}/>
        </Route>
        <Route path="/explore">
          <Header whiteHeader={whiteheader}/>
          <LandingPage section='explore'setWhiteHeaderCallback={setWhiteHeaderFunction}/>
        </Route>
        <Route path="/photographers">
          <Header whiteHeader={whiteheader}/>
          <LandingPage section='photographers'setWhiteHeaderCallback={setWhiteHeaderFunction}/>
        </Route>
        <Route path="/challenge">
          <Header whiteHeader={whiteheader}/>
          <LandingPage section='challenge'setWhiteHeaderCallback={setWhiteHeaderFunction}/>
        </Route>
        <Route path="/book">
          <Header whiteHeader={whiteheader}/>
          <LandingPage section='book'setWhiteHeaderCallback={setWhiteHeaderFunction}/>
        </Route>
        <Route path="/music">
          <Header whiteHeader={whiteheader}/>
          <LandingPage section='music'setWhiteHeaderCallback={setWhiteHeaderFunction}/>
        </Route>
        <Route path="/life">
          <Header whiteHeader={whiteheader}/>
          <LandingPage section='life'setWhiteHeaderCallback={setWhiteHeaderFunction}/>
        </Route>
        <Route path="/about">
          <About setWhiteHeaderCallback={setWhiteHeaderFunction}/>
        </Route>
        <Route path="/:LandingPage/:postId">
          <Header whiteHeader={whiteheader}/>
           <SinglePost setWhiteHeaderCallback={setWhiteHeaderFunction}/>
        </Route>
          <Route path='/profile'>
          {user ? <Profile setWhiteHeaderCallback={setWhiteHeaderFunction}/> : <Login setWhiteHeaderCallback={setWhiteHeaderFunction}/>}
        </Route>
        <Route path='/login'>
          <Header whiteHeader={whiteheader}/>
          {user ? <Home setWhiteHeaderCallback={setWhiteHeaderFunction}/> : <Login setWhiteHeaderCallback={setWhiteHeaderFunction}/>}
        </Route>
        <Route path='/register'>
          <Header whiteHeader={whiteheader}/>
          <Register setWhiteHeaderCallback={setWhiteHeaderFunction}/>
        </Route>
        <Route path="/write">
          <Header whiteHeader={whiteheader}/>
          {user ? <Write setWhiteHeaderCallback={setWhiteHeaderFunction}/> : <Login setWhiteHeaderCallback={setWhiteHeaderFunction}/>}
        </Route>
        <Route path="/edit" component={Edit}/>
      </Switch>
      {/* <Footer/> */}
    </Router>
  )
}

export default App;
