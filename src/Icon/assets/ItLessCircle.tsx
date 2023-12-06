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
      <path d='M12 3c5 0 9 4 9 9 0 2.4-.9 4.7-2.6 6.4-3.5 3.5-9.2 3.5-12.7 0s-3.5-9.2 0-12.7C7.3 3.9 9.6 3 12 3m0-1C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10c0-2.7-1.1-5.2-2.9-7.1C17.2 3 14.7 2 12 2z' />
      <path d='M7.8 11.3h8.5c.4 0 .8.3.8.8 0 .4-.3.8-.8.8H7.8c-.5-.1-.8-.5-.8-.9s.3-.7.8-.7z' />
    </svg>
  );
};
