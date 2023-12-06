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
      <path d='M16.5 8.7c-1.4 0-2.8.7-3.5 1.9V9H9.4v12h3.7v-5.9c0-1.6.3-3.1 2.2-3.1s1.9 1.8 1.9 3.2V21H21v-6.6c0-3.2-.7-5.7-4.5-5.7zM5.2 3C4 3 3 4 3 5.2c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2c0-.6-.2-1.1-.6-1.5-.5-.5-1.1-.7-1.6-.7zM3.3 9v12H7V9H3.3zm13.2-.3c-1.4-.1-2.8.7-3.5 1.9V9H9.4v12h3.7v-5.9c0-1.6.3-3.1 2.2-3.1s1.9 1.8 1.9 3.2V21H21v-6.6c0-3.2-.7-5.7-4.5-5.7zM3.3 21H7V9H3.3v12zM5.2 3C4 3 3 4 3 5.2c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2c0-.6-.2-1.1-.6-1.5-.5-.5-1.1-.7-1.6-.7z' />
    </svg>
  );
};
