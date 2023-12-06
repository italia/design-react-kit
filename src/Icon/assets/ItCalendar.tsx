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
      <path d='M20.5 4H17V3h-1v1H8V3H7v1H3.5C2.7 4 2 4.7 2 5.5v13c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5v-13c0-.8-.7-1.5-1.5-1.5zm.5 14.5c0 .3-.2.5-.5.5h-17c-.3 0-.5-.2-.5-.5v-13c0-.3.2-.5.5-.5H7v1h1V5h8v1h1V5h3.5c.3 0 .5.2.5.5v13zM4 8h16v1H4V8z' />
    </svg>
  );
};
