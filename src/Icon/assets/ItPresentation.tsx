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
      <path d='M4 5v10.6C4 16.9 5.1 18 6.4 18h3.1l-1.1 4h1l1.1-4h2.7l1.2 4h1l-1.2-4h3.5c1.3 0 2.3-1 2.3-2.3V5H4zm15 10.7c0 .7-.6 1.3-1.3 1.3H6.4c-.8 0-1.4-.6-1.4-1.4V6h14v9.7zM21 3v1H3V3h18zm-9 13c2.5 0 4.5-2 4.5-4.5S14.5 7 12 7s-4.5 2-4.5 4.5S9.5 16 12 16zm-.5-7.9V11H8.6c.2-1.5 1.4-2.7 2.9-2.9zm1 3.9V8c1.9.1 3.4 1.8 3.3 3.8S13.9 15.1 12 15c-1.7 0-3.2-1.3-3.4-3h3.9z' />
    </svg>
  );
};
