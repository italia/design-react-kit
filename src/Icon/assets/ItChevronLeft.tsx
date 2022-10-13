import * as React from 'react';
export const component = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <title>Chevron left icon</title>
      <path d='M14.6 17.2L9 11.6 14.6 6l.8.7-4.9 4.9 4.9 4.9z' />
    </svg>
  );
};
