import { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter, Redirect } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/Dashboard/PrivateRoute';
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
  }, [user, dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={Home} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
