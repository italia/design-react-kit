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
      <path d='M20.5 3.5c-.5-.6-1.3-.9-2.1-.9s-1.6.3-2.2.9L4.6 15.2l-1 5.2 5.2-1L20.5 7.8c1.2-1.2 1.2-3.1 0-4.3zm-5.7 2.8.7-.7 2.9 2.9-.7.7-2.9-2.9zm-.7.8 1.1 1-8.4 8.4-1.1-1.1 8.4-8.3zM5.7 18.3c-.1-.2-.4-.3-.6-.3l.3-1.5 2.1 2.1-1.5.3c0-.2-.1-.5-.3-.6zm2.9 0-1.1-1.1 8.4-8.4 1 1.1-8.3 8.4zM19.8 7.1l-.7.7-2.9-2.9.7-.7c.4-.4.9-.6 1.5-.6.5 0 1 .2 1.4.6.8.8.8 2.1 0 2.9z' />
    </svg>
  );
};
