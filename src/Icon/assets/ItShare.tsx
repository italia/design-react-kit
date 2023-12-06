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
      <path d='M17.5 15c-.8 0-1.5.4-2 1l-7.6-3.4c.1-.2.1-.4.1-.6 0-.2 0-.4-.1-.6L15.5 8c.8 1.1 2.4 1.3 3.5.5s1.3-2.4.5-3.5-2.4-1.3-3.5-.5c-.6.5-1 1.2-1 2 0 .2 0 .4.1.6l-7.6 3.4C6.7 9.4 5.1 9.2 4 10s-1.3 2.4-.5 3.5 2.4 1.3 3.5.5c.2-.1.4-.3.5-.5l7.6 3.4c-.1.2-.1.4-.1.6 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5zm0-10c.8 0 1.5.7 1.5 1.5S18.3 8 17.5 8 16 7.3 16 6.5 16.7 5 17.5 5zm-12 8.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5S7 11.2 7 12s-.7 1.5-1.5 1.5zm12 5.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z' />
    </svg>
  );
};
