import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import DashboardLayout from '../../layout/DashboardLayout/DashboardLayout';
import LoadingLayout from '../../layout/LoadingLayout/LoadingLayout';
import DashMain from './DashMain';
import Finances from '../Finances/Finances';
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
        </DashboardLayout>
      )}
    </>
  );
};

export default Dashboard;
