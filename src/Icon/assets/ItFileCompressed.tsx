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
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g clipPath='url(#a)'>
        <path
          clipRule='evenodd'
          d='M6.5 2h8.2L19 6.3v14.2a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 20.5v-17A1.5 1.5 0 0 1 6.5 2Zm10.8 4L15 3.7v1.8a.5.5 0 0 0 .5.5h1.8Zm.2 15h-11a.5.5 0 0 1-.5-.5v-17a.5.5 0 0 1 .5-.5h2.612v.918h-.778v.917h.778v.918h-.778v.917h.778v.918h1.166V6.67H9.5v-.917h.778v-.918H9.5v-.917h.778V3H14v2.5A1.5 1.5 0 0 0 15.5 7H18v13.5a.5.5 0 0 1-.5.5ZM9.111 8.046c-.429 0-.777.411-.777.918v.86l-.31 1.467c-.08.377.049.771.322.986l.723.569a.68.68 0 0 0 .862 0l.723-.569c.273-.215.402-.61.323-.986l-.31-1.466v-.861c0-.507-.349-.918-.778-.918H9.11Zm0 .918h.778v.86c0 .076.007.15.023.223l.31 1.467-.722.569-.723-.569.311-1.467c.016-.072.023-.147.023-.222v-.861Z'
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
