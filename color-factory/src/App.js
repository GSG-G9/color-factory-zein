import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Colors from "./Colors";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/colors" component={Colors} />
        <Route component={Colors} />
      </Switch>
    </Router>
  );
}

export default App;
