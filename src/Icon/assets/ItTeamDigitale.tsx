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
      <path d='M23.6 24H.4c-.2 0-.4-.2-.4-.4V.4C0 .2.2 0 .4 0h23.3c.1 0 .3.2.3.4v23.3c0 .1-.2.3-.4.3zM5.8 11.8c.9 0 1.6-.7 1.6-1.6s-.7-1.6-1.6-1.6-1.6.7-1.6 1.6.7 1.6 1.6 1.6zM10 19h4.4c4.7 0 5.6-2.3 5.6-6.7S19 6 14.4 6H10v13zm4.4-10.7c2.6 0 2.8 1.1 2.8 4s-.3 4.5-2.8 4.5h-1.8V8.3h1.8z' />
    </svg>
  );
};
