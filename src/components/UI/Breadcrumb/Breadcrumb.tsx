import React from 'react';

import { Link } from 'react-router-dom';
import { Breadcrumbs, Typography } from '@material-ui/core';
import { getPage } from '../../../utils/Pages';

interface BreadcrumbProps {
  pathname: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ pathname }) => {
  //divide pathname by '/' removing empty strings
  const pathArray = pathname.split('/').filter(Boolean);

  //turn path into array of links
  const links = pathArray.map((link, index) => {
    //if last link, return title
    const { title } = getPage(link);
    if (index === pathArray.length - 1) {
      return (
        <Typography key={index} color="textPrimary">
          {title}
        </Typography>
      );
    }
    //if not last link, return link
    return (
      <Link key={index} to={`/${pathArray.slice(0, index + 1).join('/')}`}>
        <Typography color="textPrimary">{title}</Typography>
      </Link>
    );
  });

  return <Breadcrumbs aria-label="breadcrumb">{links}</Breadcrumbs>;
};

export default Breadcrumb;
