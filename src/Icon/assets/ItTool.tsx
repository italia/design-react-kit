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
      <path d='M7.7 5c.6 0 1.2.2 1.7.5 1.1.6 1.7 1.8 1.6 3-.1.9.2 1.8.8 2.4l6.3 6.3c.4.3.5.9.2 1.3-.2.3-.5.5-.8.5-.3 0-.5-.1-.7-.3l-6.4-6.4c-.6-.5-1.3-.8-2.1-.8h-.6c-.8 0-1.7-.4-2.2-1h2.7V6.4H5.1c.3-.4.6-.8 1.1-1 .5-.3 1-.4 1.5-.4m0-1c-.7 0-1.4.2-2 .5-1.1.6-1.9 1.7-2.1 2.9h3.6v2.1H3.7c.2.7.6 1.3 1 1.8.8.8 1.9 1.2 3 1.2h.6c.5 0 1 .2 1.4.5l6.4 6.4c.4.4.9.6 1.4.6.7 0 1.3-.3 1.6-.9.6-.8.4-1.9-.3-2.6l-6.3-6.3c-.4-.4-.6-1-.5-1.6.1-1.6-.7-3.1-2-4-.7-.4-1.5-.6-2.3-.6z' />
    </svg>
  );
};
