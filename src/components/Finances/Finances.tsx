import React from 'react';
import TitleBar from '../Common/TitleBar/TitleBar';
import DashContent from '../../layout/DashContent/DashContent';

const Finances: React.FC = () => {
  return (
    <>
      <TitleBar title="Finances" route="Main > Finances" />
      <DashContent>This is the Finances Content for you</DashContent>
    </>
  );
};

export default Finances;
