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
      <path d='M20 3H4c-.6 0-1 .4-1 1v16c0 .6.4 1 1 1h8.6v-6.9h-2.3v-2.8h2.3v-2c-.1-1 .2-1.9.9-2.6s1.6-1.1 2.6-1c.7 0 1.4 0 2.1.1v2.4h-1.4c-1.1 0-1.3.5-1.3 1.3v1.7h2.7l-.4 2.7h-2.3v7H20c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1z' />
    </svg>
  );
};
