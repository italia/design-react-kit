import * as React from 'react';
import { SVGProps } from 'react';
import { SVGRProps } from '.';
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
      <path d='m17.9 13.2-5.4 5.3V3h-1v15.5l-5.4-5.3-.7.7 6.6 6.5 6.6-6.5-.7-.7z' />
    </svg>
  );
};
