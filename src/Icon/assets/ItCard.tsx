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
      <path d='M20.5 5h-17C2.7 5 2 5.7 2 6.5v11c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5v-11c0-.8-.7-1.5-1.5-1.5zM3 9h18v3H3V9zm18 8.5c0 .3-.2.5-.5.5h-17c-.3 0-.5-.2-.5-.5V13h18v4.5zM3 8V6.5c0-.3.2-.5.5-.5h17c.3 0 .5.2.5.5V8H3zm5 7H4v-1h4v1z' />
    </svg>
  );
};
