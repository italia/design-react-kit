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
      <path d='M14.8 12H9.2c-.6 0-1-.5-1-1 0-.3.1-.5.3-.7L12 6.8l3.5 3.5c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3z' />
    </svg>
  );
};
