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
      <path d='m8.4 7.3-.7-.7L12 2.3l4.3 4.3-.7.7-3.1-3.1v9.3h-1V4.2L8.4 7.3zM19 12v7.5c0 .3-.2.5-.5.5h-13c-.3 0-.5-.2-.5-.5V12H4v7.5c0 .8.7 1.5 1.5 1.5h13c.8 0 1.5-.7 1.5-1.5V12h-1z' />
    </svg>
  );
};
