import React from 'react';
import { Route } from 'react-router-dom';

import Layout from '../../layout/PublicLayout/Layout';
import Main from './Main';
import Login from '../Login/Login';
import Register from '../Register/Register';

const Home: React.FC = () => {

  return (
    <Layout>
      <Route path="/home" exact component={Main} />
      <Route path="/home/login" exact component={Login} />
      <Route path="/home/register" exact component={Register} />
    </Layout>
  );
};

export default Home;
