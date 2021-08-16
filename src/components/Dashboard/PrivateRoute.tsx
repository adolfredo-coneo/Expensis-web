import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';

interface PrivateRouteProps {
  component: React.ElementType;
  path: string;
  exact?: boolean;
  routeProps?: any;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  path,
  exact,
  routeProps,
}) => {
  const user = useAppSelector((state) => state.auth);
  return user.email ? (
    <Route path={path} exact={exact}>
      <Component {...routeProps} />
    </Route>
  ) : (
    <Redirect to="/home/login" />
  );
};

export default PrivateRoute;
