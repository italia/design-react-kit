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
      <path d='M21 12c0 5-4 9-9 9s-9-4-9-9 4-9 9-9c2.4 0 4.7.9 6.4 2.6.4.4.8.9 1.1 1.4h-4v1H21V2.5h-1V6c-.3-.4-.6-.7-.9-1.1C15.2 1 8.8 1 4.9 4.9S1 15.2 4.9 19.1s10.2 3.9 14.1 0c1.9-1.9 2.9-4.4 2.9-7.1H21z' />
    </svg>
  );
};
