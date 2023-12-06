import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const component = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        clipRule='evenodd'
        d='M6.5 2h8.2L19 6.3v14.2a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 20.5v-17A1.5 1.5 0 0 1 6.5 2Zm10.8 4L15 3.7v1.8a.5.5 0 0 0 .5.5h1.8Zm.2 15h-11a.5.5 0 0 1-.5-.5v-17a.5.5 0 0 1 .5-.5H14v2.5A1.5 1.5 0 0 0 15.5 7H18v13.5a.5.5 0 0 1-.5.5ZM8.504 9.438A.5.5 0 0 1 9 9h6a.5.5 0 0 1 .496.438l.5 4A.5.5 0 0 1 15.5 14h-3v2H14v1h-4v-1h1.5v-2h-3a.5.5 0 0 1-.496-.562l.5-4Zm2.496.783v2.558c0 .097.106.157.19.107l2.131-1.279a.125.125 0 0 0 0-.214l-2.132-1.28a.125.125 0 0 0-.189.108Z'
      />
    </svg>
  );
};
