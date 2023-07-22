import Topbar from "./components/topbar/Topbar";
import Home from "./page/home/Home";
import Problempg from "./page/problem/Problempg";
import Login from "./page/login/Login";
import Register from "./page/register/Register";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const currentUser = true;
  return (
    // <Router>
    //   <Topbar />
    //   <Switch>
    //     <Route exact path="/">
    //       <Home />
    //     </Route>
    //   </Switch>
    // </Router>

    // <BrowserRouter>
    // <Topbar />
    //     <Routes>
    //       <Route path="/" element = {<Home />} />
    //     </Routes>
    // </BrowserRouter>

    <BrowserRouter>
    <Topbar />
        <Routes>
          <Route exact path="/" element ={ <Home />} />
          <Route path="/problem" element = {<Problempg />}/>
          <Route path="/register" element ={ currentUser ? <Home/> : <Register/>} />
        <Route path="/LOGIN" element={currentUser ? <Login /> : <Login />} />

        {/* <Route path="/register">
          {currentUser ? <Home /> : <Register />}
        </Route>
        <Route path="/login">{currentUser ? <Home /> : <Login />}</Route> */}

        </Routes>
    </BrowserRouter>
    
  );
}

export default App;
