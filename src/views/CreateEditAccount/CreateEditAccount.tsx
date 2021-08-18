import React from 'react';
import DashContent from '../../layout/DashContent/DashContent';

interface CreateEditAccountProps {
  code: string;
}

const CreateEditAccount: React.FC<CreateEditAccountProps> = ({ code }) => {
  return (
    <DashContent code={code} variant="dashed">
      This is the Content for you
    </DashContent>
  );
};

export default CreateEditAccount;
