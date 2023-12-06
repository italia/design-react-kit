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
      <path d='M16.5 12H16V7c0-2.2-1.8-4-4-4S8 4.8 8 7v5h-.5c-.6 0-1.1.5-1.1 1.1v6.8c0 .6.5 1.1 1.1 1.1h9c.6 0 1.1-.5 1.1-1.1v-6.8c0-.6-.5-1.1-1.1-1.1zM9 7c0-1.7 1.3-3 3-3s3 1.3 3 3v5H9V7zm7.6 12.9c0 .1 0 .1-.1.1h-9c-.1 0-.1 0-.1-.1v-6.8h9.2v6.8zM13 15.5c0 .3-.2.7-.5.8v1.5h-1v-1.5c-.3-.1-.5-.5-.5-.8 0-.6.4-1 1-1s1 .4 1 1z' />
    </svg>
  );
};
