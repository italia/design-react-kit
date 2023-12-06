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
      <path d='M13.6 22v-9.1h3.1l.5-3.6h-3.5V7.1c0-1 .3-1.7 1.8-1.7h1.9V2.1c-1.1-.1-2-.1-3-.1-2.7 0-4.6 1.7-4.6 4.7v2.6h-3v3.6h3.1V22h3.7z' />
    </svg>
  );
};
