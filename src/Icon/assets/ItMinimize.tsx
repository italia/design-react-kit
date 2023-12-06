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
      <path d='M3 15.5h5.5V21h-1v-4.5H3zM7.5 7.5H3v1h5.5V3h-1zM15.5 21h1v-4.5H21v-1h-5.5zM16.5 7.5V3h-1v5.5H21v-1z' />
    </svg>
  );
};
