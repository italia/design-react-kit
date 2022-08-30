import * as React from 'react';
export const component = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path d='M17.1 7.9l.7.7-7.8 7.6-4.7-4.6.7-.7 4 3.9 7.1-6.9zM22 12c0 5.5-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2s10 4.5 10 10zm-1 0c0-5-4-9-9-9s-9 4-9 9 4 9 9 9 9-4 9-9z' />
    </svg>
  );
};
