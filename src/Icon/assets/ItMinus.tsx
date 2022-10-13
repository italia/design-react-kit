import * as React from 'react';
export const component = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <title>Minus icon</title>
      <path d='M20 12.5H4v-1h16z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
