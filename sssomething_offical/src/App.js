import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import Footer from './components/Layout/Footer/Footer';
import About from "./Pages/About/About";
import Login from "./Pages/Account/Login";
import Register from "./Pages/Account/Register";
import MainPage from './Pages/MainPage/MainPage';
import Home from "./Pages/Home/Home";
import Write from "./Pages/Write/Write";
import SinglePost from "./components/SinglePost/SinglePost";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <Router>
      {/* <ScrollToTop/> */}
      <Header/>
      <Switch>
        <Route path="/" exact={true}>
          <Home/>
        </Route>
        <Route path="/explore">
          <MainPage />
        </Route>
        <Route path="/photographers">
          <MainPage />
        </Route>
        <Route path="/challenge">
          <MainPage />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/:mainPage/:postId">
           <SinglePost/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/register'>
          <Register/>
        </Route>
        <Route path="/write">
          <Write/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  )
}

export default App;
