import React from 'react';

const Item = ({ id, children }: { id: string; children: React.ReactNode }) => {
  return (
    <>
      Item {id} {children}
    </>
  );
};

export { Item };
