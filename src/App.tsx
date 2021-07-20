import { Route, Switch } from 'react-router';
import './App.css';
import Layout from './layout/Layout';
import Main from './components/Home/Main';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </Switch>
    </Layout>
  );
}

export default App;
