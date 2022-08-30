import * as React from 'react';
export const component = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path d='M21 11.5H5.5l5.3-5.4-.7-.7L3.6 12l6.5 6.6.7-.7-5.3-5.4H21v-1z' />
    </svg>
  );
};
