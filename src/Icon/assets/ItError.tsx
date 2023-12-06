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
      <path d='M11.5 14.2V5.7h1.2v8.5h-1.2zm-.1 4.1h1.2v-1.8h-1.2v1.8zM22 7.9v8.3L16.1 22H7.9L2 16.2V7.9L7.9 2h8.2L22 7.9zm-1 .4L15.7 3H8.3L3 8.3v7.5L8.3 21h7.4l5.3-5.2V8.3z' />
    </svg>
  );
};
