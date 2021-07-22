import { Route, Switch } from 'react-router';
import './App.css';
import Layout from './layout/Layout';
import Main from './components/Home/Main';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
    </Layout>
  );
}

export default App;
