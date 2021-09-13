import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./Components/Context/UserContext";
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register";
import Habits from "./Components/Habits/Habits";
import Today from "./Components/Today/Today";
import History from "./Components/History/History";
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  
  return (
    <UserContext.Provider value={{user, setUser}}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Login/>
          </Route>
          <Route path="/cadastro" exact>
            <Register/>
          </Route>
          <Route path="/habitos" exact>
            <Habits/>
          </Route>
          <Route path="/hoje" exact>
            <Today/>
          </Route>
          <Route path="/historico" exact>
            <History/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
