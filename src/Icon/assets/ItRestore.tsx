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
      <path d='M12 2C9.3 2 6.8 3 4.9 4.9c-.3.4-.6.7-.9 1.1V2.5H3V8h5.5V7h-4c.3-.5.7-.9 1.1-1.4 3.5-3.5 9.2-3.6 12.7-.1s3.6 9.2.1 12.7-9.2 3.6-12.7.1C4 16.7 3 14.4 3 12H2c0 5.5 4.5 10 10 10s10-4.5 10-10S17.5 2 12 2z' />
    </svg>
  );
};
