import React from 'react';

interface TitleBarProps {
  title: string;
  route: string;
}

const TitleBar: React.FC<TitleBarProps> = ({ title, route }) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <p>{route}</p>
      </div>
    </div>
  );
};

export default TitleBar;
