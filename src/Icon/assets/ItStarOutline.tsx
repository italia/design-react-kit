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
      <path d='m12 4.9 1.5 4.6.2.7h5.7l-4 2.9-.6.4.2.7 1.5 4.7-3.9-2.9-.6-.4-.6.4-3.9 2.9L9 14.2l.2-.7-.6-.4-4-2.9h5.7l.2-.7L12 4.9m0-3.2L9.5 9.2H1.6L8 13.9l-2.4 7.6 6.4-4.7 6.4 4.7-2.4-7.6 6.4-4.7h-7.9L12 1.7z' />
    </svg>
  );
};
