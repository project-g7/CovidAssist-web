import "./App.css";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import WelcomeAdmin from "./components/Admin/WelcomeAdmin";
import AdminVaccineManage from "./components/Admin/pages/VaccineManage";
import Requests from "./components/Admin/pages/Requests";
import Iot from "./components/Admin/pages/Iot";
import WelcomeVaccine from "./components/VaccineManager/WelcomeVaccine";
import WelcomeContact from "./components/ContactTracingManager/WelcomeContactTracing";
import ForgotPassword from "./components/ForgotPassword";
import Register from "./components/Register";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/ForgotPassword" component={ForgotPassword}></Route>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/Register" component={Register}></Route>
        <Route exact path="/Welcome" component={Welcome}></Route>
        <Route exact path="/admin" component={WelcomeAdmin}></Route>
        <Route exact path="/vaccine" component={WelcomeVaccine}></Route>
        <Route exact path="/ct" component={WelcomeContact}></Route>
        <Route exact path="/admin/vaccinemanage" component={AdminVaccineManage}></Route>
        <Route exact path="/admin/requests" component={Requests}></Route>
        <Route exact path="/admin/iot" component={Iot}></Route> */}
      </Switch>
    </Router>
  );
}

export default App;
