import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import DashboardLayout from '../../layout/DashboardLayout/DashboardLayout';
import LoadingLayout from '../../layout/LoadingLayout/LoadingLayout';
import DashMain from '../../views/DashMain/DashMain';
import Finances from '../../views/Finances/Finances';
import Accounts from '../../views/Accounts/Accounts';
import Obligations from '../../views/Obligations/Obligations';
import CreateEditAccount from '../../views/CreateEditAccount/CreateEditAccount';
import PrivateRoute from './PrivateRoute';
import { loadSystem } from '../../store/actions/system';

const Dashboard: React.FC = () => {
  const dispatch = useAppDispatch();
  const loadPercentage = useAppSelector(
    (state) => state.layout.loadingDashboard
  );

  useEffect(() => {
    const geSystemData = async () => {
      await dispatch(loadSystem());
    };
    geSystemData();
  }, [dispatch]);

  console.log(loadPercentage);

  return (
    <>
      {loadPercentage < 100 && (
        <LoadingLayout variant="determinate" value={loadPercentage} />
      )}
      {loadPercentage === 100 && (
        <DashboardLayout>
          <PrivateRoute path="/dashboard" exact component={DashMain} />
          <PrivateRoute path="/dashboard/finances" exact component={Finances} />
          <PrivateRoute path="/dashboard/accounts" exact component={Accounts} />
          <PrivateRoute path="/dashboard/obligations" exact component={Obligations} />
          <PrivateRoute path="/dashboard/create-account" exact component={CreateEditAccount} routeProps={{code: 'create-account'}} />
        </DashboardLayout>
      )}
    </>
  );
};

export default Dashboard;
