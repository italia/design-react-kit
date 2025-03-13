import * as React from 'react';
import { SVGProps } from 'react';
import { SVGRProps } from '.';
export const component = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      xmlSpace='preserve'
      enableBackground='new 0 0 24 24'
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d='M20.5 20h-17c-.8 0-1.5-.7-1.5-1.5v-10C2 7.7 2.7 7 3.5 7h4.3l1.5-2.3c.3-.4.7-.7 1.2-.7h3c.5 0 .9.3 1.2.7L16.2 7h4.3c.8 0 1.5.7 1.5 1.5v10c0 .8-.7 1.5-1.5 1.5zM3.5 8c-.3 0-.5.2-.5.5v10c0 .3.2.5.5.5h17c.3 0 .5-.2.5-.5v-10c0-.3-.2-.5-.5-.5h-4.8l-1.8-2.8-.4-.2h-3l-.4.2L8.3 8H3.5zM12 18c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-9c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zM7 5H4v1h3V5z' />
    </svg>
  );
};
