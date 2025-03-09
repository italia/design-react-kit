import React from 'react';

const Target = ({ children }: { children: React.ReactNode }) => {
  return <>Target {children}</>;
};

Target.Header = () => {
  return <>Target.Header</>;
};

export { Target };
