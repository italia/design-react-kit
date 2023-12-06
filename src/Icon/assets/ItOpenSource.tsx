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
      <path d='M12 2C6.5 2 2 6.5 2 12c0 4.3 2.7 8.1 6.8 9.5l1.7-5.8.3-1C9.7 14.3 9 13.2 9 12c0-1.7 1.3-3 3-3s3 1.3 3 3c0 1.2-.7 2.3-1.9 2.8l.3 1 1.8 5.8c5.3-1.7 8.1-7.3 6.4-12.6-1.3-4.2-5.2-7-9.6-7zm3.8 18.1-1.5-4.9c.1-.1.2-.1.2-.2.1-.1.2-.1.2-.2l.2-.2c.3-.3.6-.7.7-1.1l.1-.3c0-.1.1-.2.1-.3 0-.2.1-.3.1-.5V12c0-2.2-1.8-4-4-4s-4 1.8-4 4v.5c0 .2.1.3.1.4 0 .2.1.3.1.4.1.3.3.6.4.8.1.1.2.3.3.4l.3.3c.1.1.2.2.4.3L8 20c-4.5-2.1-6.4-7.5-4.3-12s7.5-6.4 12-4.3 6.4 7.5 4.3 12c-.7 2-2.3 3.6-4.2 4.4z' />
    </svg>
  );
};
