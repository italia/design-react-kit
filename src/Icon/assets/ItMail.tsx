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
      <path d='M20.5 5h-17C2.7 5 2 5.7 2 6.5v11c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5v-11c0-.8-.7-1.5-1.5-1.5zm-.3 1-7.1 7.2c-.6.6-1.6.6-2.2 0L3.8 6h16.4zM3 17.3V6.6L8.3 12 3 17.3zm.7.7L9 12.7l1.2 1.2c1 .9 2.6.9 3.6 0l1.2-1.2 5.3 5.3H3.7zm12-6L21 6.6v10.7L15.7 12z' />
    </svg>
  );
};
