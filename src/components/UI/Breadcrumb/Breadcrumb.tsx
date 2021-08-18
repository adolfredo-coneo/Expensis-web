import React from 'react';

import { Link } from 'react-router-dom';
import { Breadcrumbs, Typography } from '@material-ui/core';

interface BreadcrumbProps {
  title: string;
  breadcrumbItems: Array<string>;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, breadcrumbItems }) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" to="/dashboard">
        Main
      </Link>
      {breadcrumbItems.map((item, index) => (
        <Link color="inherit" to="/dashboard">
          {item}
        </Link>
      ))}
      <Typography color="textPrimary">{title}</Typography>
    </Breadcrumbs>
  );
};

export default Breadcrumb;
