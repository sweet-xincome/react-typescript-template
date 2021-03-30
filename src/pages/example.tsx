import React from 'react';

type UserInfo = {
  name: string;
  age: number;
};

export const User: React.FC<UserInfo> = ({ name, age, children }) => {
  return (
    <div className="User">
      <p>{name}</p>
      <p>{age}</p>
      <div>{children}</div>
    </div>
  );
};
