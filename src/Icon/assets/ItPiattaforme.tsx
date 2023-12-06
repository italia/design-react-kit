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
      <path d='M12 4.1 18.9 8 12 11.9 5.1 8 12 4.1M12 3 3 8l9 5 9-5-9-5zM21 14.7l-9 5-9-5 1-.5 8 4.4 8-4.5z' />
      <path d='m21 11.5-9 5-9-5 1-.5 8 4.4 8-4.5z' />
    </svg>
  );
};
