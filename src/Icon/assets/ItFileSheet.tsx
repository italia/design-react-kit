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
      xmlns='http://www.w3.org/2000/svg'
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g clipPath='url(#a)'>
        <path
          clipRule='evenodd'
          d='M6.5 2h8.2L19 6.3v14.2a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 20.5v-17A1.5 1.5 0 0 1 6.5 2Zm10.8 4L15 3.7v1.8a.5.5 0 0 0 .5.5h1.8Zm.2 15h-11a.5.5 0 0 1-.5-.5v-17a.5.5 0 0 1 .5-.5H14v2.5A1.5 1.5 0 0 0 15.5 7H18v13.5a.5.5 0 0 1-.5.5ZM14 10v7h2v-7h-2Zm-3 7v-5h2v5h-2Zm-3-3v3h2v-3H8Z'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path d='M0 0h24v24H0z' />
        </clipPath>
      </defs>
    </svg>
  );
};
