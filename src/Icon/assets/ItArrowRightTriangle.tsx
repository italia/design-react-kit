import * as React from 'react';
export const component = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path d='M12 14.8V9.2c0-.6.5-1 1-1 .3 0 .5.1.7.3l3.5 3.5-3.5 3.5c-.4.4-1 .4-1.4 0-.2-.2-.3-.4-.3-.7z' />
    </svg>
  );
};
