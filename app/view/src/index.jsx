const React = require("react");
const ReactDOM = require("react-dom");
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Main from './main.jsx';
import SignIn from './signin.jsx';
import SignUp from './signup.jsx';
import ForgotPassword from './forgotpassword.jsx';
import ScoreCalculator from './scorecalculator.jsx';

const AppRouter = () => (
  <Router>
    <div>
      <Route path="/" exact component={Main} />
      <Route path="/signin/" component={SignIn} />
      <Route path="/signup/" component={SignUp} />
      <Route path="/forgotpassword/" component={ForgotPassword} />
      <Route path="/scorecalculator/" component={ScoreCalculator} />
    </div>
  </Router>
);

const root = document.getElementById("root");
ReactDOM.render(<AppRouter />, root);
