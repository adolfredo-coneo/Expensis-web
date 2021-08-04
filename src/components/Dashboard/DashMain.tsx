import React from 'react';
import TitleBar from '../Common/TitleBar/TitleBar';
import DashContent from '../../layout/DashContent/DashContent';

const DashMain: React.FC = () => {
  return (
    <>
      <TitleBar title="Dashboard" route="Main > Dashboard" />
      <DashContent>This is the Dashboard for you</DashContent>
    </>
  );
};

export default DashMain;
