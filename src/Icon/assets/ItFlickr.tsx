import * as React from 'react';
export const component = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <circle cx={6.7} cy={12} r={4.7} />
      <circle cx={17.3} cy={12} r={4.7} />
    </svg>
  );
};
