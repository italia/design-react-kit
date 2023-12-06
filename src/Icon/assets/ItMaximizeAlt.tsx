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
      <path d='m15.1 18.1.7.7-3.8 3.9-3.9-3.9.7-.7 2.7 2.7v-7.3h1v7.3zM18.9 8.1l-.8.7 2.7 2.7h-7.3v1h7.3l-2.6 2.6.7.7 3.8-3.8zM11.5 3.2v7.3h1V3.2l2.6 2.6.7-.7L12 1.3 8.1 5.1l.7.7zM10.5 12.5v-1H3.2l2.6-2.7-.6-.7L1.3 12l3.8 3.8.7-.7-2.6-2.6z' />
    </svg>
  );
};
