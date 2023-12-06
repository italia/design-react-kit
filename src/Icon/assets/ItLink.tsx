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
      <path d='m13.4 13.4-.7-.7c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.1L9.2 4.9C8 3.8 6.1 3.8 4.9 4.9 3.8 6.1 3.8 8 4.9 9.2L7.8 12l-.7.7-2.9-2.8c-1.5-1.6-1.5-4.1 0-5.7 1.6-1.5 4.1-1.5 5.7 0l3.5 3.6c.8.7 1.2 1.7 1.2 2.8 0 1.1-.4 2.1-1.2 2.8zm6.4 6.4c1.5-1.6 1.5-4.1 0-5.7l-2.9-2.8-.7.7 2.9 2.8c1.1 1.2 1.1 3.1 0 4.3-1.2 1.1-3.1 1.1-4.3 0l-3.5-3.6c-.6-.5-.9-1.3-.9-2.1s.3-1.6.9-2.1l-.7-.7c-.8.7-1.2 1.7-1.2 2.8 0 1.1.4 2.1 1.2 2.8l3.5 3.6c.7.7 1.8 1.1 2.8 1.1 1.1.1 2.1-.3 2.9-1.1z' />
    </svg>
  );
};
