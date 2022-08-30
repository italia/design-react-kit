import * as React from 'react';
export const component = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path d='M12 4.1L18.9 8 12 11.9 5.1 8 12 4.1M12 3L3 8l9 5 9-5-9-5zM21 14.7l-9 5-9-5 1-.5 8 4.4 8-4.5z' />
      <path d='M21 11.5l-9 5-9-5 1-.5 8 4.4 8-4.5z' />
    </svg>
  );
};
