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
          d='M6.5 2h8.2L19 6.3v14.2a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 20.5v-17A1.5 1.5 0 0 1 6.5 2Zm10.8 4L15 3.7v1.8a.5.5 0 0 0 .5.5h1.8Zm.2 15h-11a.5.5 0 0 1-.5-.5v-17a.5.5 0 0 1 .5-.5H14v2.5A1.5 1.5 0 0 0 15.5 7H18v13.5a.5.5 0 0 1-.5.5ZM12 9.727 15 9v2.75l-2 .5v3.61c0 .495-.301.883-.662 1.123-.364.243-.839.377-1.338.377-.5 0-.974-.134-1.338-.377-.36-.24-.662-.628-.662-1.123s.301-.883.662-1.123c.364-.243.839-.377 1.338-.377.356 0 .7.068 1 .196v-4.83Z'
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
