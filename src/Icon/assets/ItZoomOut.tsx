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
      <path d='M6.2 9.5h7.5v1H6.2v-1zm14.9 12.4L15.3 16c-1.5 1.3-3.4 2-5.3 2-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8c0 1.9-.7 3.8-2 5.3l5.9 5.8-.8.8zM17 10c0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7 7-3.1 7-7z' />
    </svg>
  );
};
