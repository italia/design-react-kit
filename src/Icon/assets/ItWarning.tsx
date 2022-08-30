import * as React from 'react';
export const component = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path d='M12.5 17h-1V2h1v15zm0 3h-1v2h1v-2z' />
    </svg>
  );
};
