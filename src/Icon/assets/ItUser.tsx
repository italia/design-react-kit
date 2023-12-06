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
      <path d='M12 13c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4S8 3.8 8 6v3c0 2.2 1.8 4 4 4zM9 6c0-1.7 1.3-3 3-3s3 1.3 3 3v3c0 1.7-1.3 3-3 3s-3-1.3-3-3V6zm11 16h-1c0-3.9-3.1-7-7-7s-7 3.1-7 7H4c0-4.4 3.6-8 8-8s8 3.6 8 8z' />
    </svg>
  );
};
