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
      <path d='M17.7 5.3C16 2.2 12 1.1 8.9 2.8s-4.3 5.7-2.5 8.8L12 22l5.7-10.4c.5-1 .8-2 .8-3.1s-.3-2.2-.8-3.2zm-.9 5.8L12 19.9l-4.8-8.8c-.5-.8-.7-1.7-.7-2.7C6.5 5.4 9 3 12 3s5.5 2.5 5.5 5.5c0 .9-.2 1.8-.7 2.6z' />
    </svg>
  );
};
