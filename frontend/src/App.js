import "./App.css";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import ForgotPassword from "./components/ForgotPassword";
import Register from "./components/Register";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Route exact path="/ForgotPassword" component={ForgotPassword}></Route>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/Register" component={Register}></Route>
        <Route exact path="/Welcome" component={Welcome}></Route>
      </div>
    </Router>
  );
}

export default App;
