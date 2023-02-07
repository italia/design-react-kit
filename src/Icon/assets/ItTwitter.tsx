import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const component = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => {
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
      <path d='M8.1 20c2.9 0 5.7-1.1 7.8-3.2s3.2-4.9 3.2-7.8v-.5c.8-.5 1.4-1.2 1.9-2-.7.3-1.5.5-2.2.6.8-.5 1.4-1.2 1.7-2.1-.8.4-1.6.7-2.5.9-1.1-1.2-2.8-1.5-4.2-.9s-2.4 2-2.4 3.6c0 .3 0 .6.1.9-3.1-.1-6-1.6-8-4-1 1.8-.5 4 1.2 5.2-.6 0-1.2-.2-1.8-.5 0 1.9 1.3 3.5 3.2 3.8-.4 0-.8 0-1.1.1-.2 0-.5 0-.7-.1.5 1.6 2 2.6 3.6 2.7-1.4 1.1-3.1 1.7-4.8 1.7-.3 0-.6 0-.9-.1C3.9 19.4 6 20 8.1 20' />
    </svg>
  );
};
