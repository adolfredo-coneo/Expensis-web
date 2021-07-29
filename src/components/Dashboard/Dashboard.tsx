import React from 'react';

import DashboardLayout from '../../layout/DashboardLayout/DashboardLayout';
import DashMain from './DashMain';
import Finances from '../Finances/Finances';
import PrivateRoute from './PrivateRoute';

const Dashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <PrivateRoute path="/dashboard" exact component={DashMain} />
      <PrivateRoute path="/dashboard/finances" exact component={Finances} />
    </DashboardLayout>
  );
};

export default Dashboard;
