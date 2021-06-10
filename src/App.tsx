import { Route, Switch } from "react-router";
import "./App.css";
import Footer from "./components/Home/Footer";
import Main from "./components/Home/Main";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  return (
    <>
      <MainHeader />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
