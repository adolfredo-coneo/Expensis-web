import { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Layout from './layout/Layout';
import Main from './components/Home/Main';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import { useAppSelector, useAppDispatch } from './store/hooks';
import { getCurrentUser } from './store/actions/auth';

let isInitial = true;

function App() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      dispatch(getCurrentUser());
      return;
    }
    console.log(user.email);
    // eslint-disable-next-line
  }, [user]);

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
