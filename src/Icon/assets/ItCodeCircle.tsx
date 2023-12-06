import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
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
      <path d='m19 12-2.9 2.9-.7-.8 2.1-2.1-2.1-2.1.7-.8L19 12zM7.9 9.1 5 12l2.9 2.9.7-.8L6.5 12l2.1-2.1-.7-.8zM22 12c0 5.5-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2s10 4.5 10 10zm-1 0c0-5-4-9-9-9s-9 4-9 9 4 9 9 9 9-4 9-9zM9.6 16.5l1 .3 3.7-9.3-.9-.3-3.8 9.3z' />
    </svg>
  );
};
