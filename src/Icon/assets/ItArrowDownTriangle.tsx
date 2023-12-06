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
      <path d='M9.2 12h5.6c.6 0 1 .5 1 1 0 .3-.1.5-.3.7L12 17.3l-3.5-3.6c-.4-.4-.4-1 0-1.4.2-.2.4-.3.7-.3z' />
    </svg>
  );
};
