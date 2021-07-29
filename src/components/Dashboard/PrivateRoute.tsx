import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';

interface PrivateRouteProps {
  component: React.FC;
  path: string;
  exact?: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component,
  path,
  exact,
  ...rest
}) => {
  const user = useAppSelector((state) => state.auth);
  return user.email ? (
    <Route path={path} exact={exact} component={component} {...rest} />
  ) : (
    <Redirect to="/home/login" />
  );
};

export default PrivateRoute;
