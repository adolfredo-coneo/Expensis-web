import React from 'react';
import DashContent from '../../layout/DashContent/DashContent';

interface CreateEditAccountProps {
  title: string;
}

const CreateEditAccount: React.FC<CreateEditAccountProps> = ({ title }) => {
  return (
    <DashContent title={title} variant="dashed">
      This is the {title} Content for you
    </DashContent>
  );
};

export default CreateEditAccount;
