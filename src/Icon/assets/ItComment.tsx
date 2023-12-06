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
      <path d='M19 3H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h2v5.4l1.7-1.7 3.7-3.7H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm1 12c.1.5-.3.9-.8 1H12l-4 4v-4H5c-.5.1-.9-.3-1-.8V5c-.1-.5.3-.9.8-1H19c.5-.1.9.3 1 .8V15zM9 10c.1.5-.3.9-.8 1H8c-.5.1-.9-.3-1-.8V10c-.1-.5.3-.9.8-1H8c.5-.1.9.3 1 .8v.2zm4 0c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .4 1 1zm4 0c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .4 1 1z' />
    </svg>
  );
};
