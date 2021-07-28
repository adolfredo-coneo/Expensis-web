import { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import { useAppSelector, useAppDispatch } from './store/hooks';
import { getCurrentUser } from './store/actions/auth';
import { BrowserRouter } from 'react-router-dom';

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
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
