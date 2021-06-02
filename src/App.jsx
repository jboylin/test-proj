import "./App.css";
import { UserContext } from "./components/context/user.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext, useState } from "react";
import LoginForm from "./components/LoginForm.jsx";

function App() {
  const [user, setUser] = useState({
    username: "Guest",
    avatar_url: "https://avatarfiles.alphacoders.com/115/thumb-115340.jpg",
  });

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <LoginForm />
          </Route>
        </Switch>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
