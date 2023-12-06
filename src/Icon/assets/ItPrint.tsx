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
      <path d='M21 9.5c0-.8-.7-1.5-1.5-1.5H17V3H7v5H4.5C3.7 8 3 8.7 3 9.5V16h2v3h2v2h10v-2h2v-3h2V9.5zM8 4h8v4H8V4zM6 18v-4h1v4H6zm10 2H8v-6h8v6zm2-2h-1v-4h1v4zm2-3h-1v-2H5v2H4V9.5c0-.3.2-.5.5-.5h15c.3 0 .5.2.5.5V15zM6 11h4v1H6v-1z' />
    </svg>
  );
};
