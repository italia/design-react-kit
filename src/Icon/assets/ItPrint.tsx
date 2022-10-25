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
      width={24}
      height={24}
      viewBox='0 0 24 24'
      role='img'
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{'Print'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M21 9.5A1.5 1.5 0 0 0 19.5 8H17V3H7v5H4.5A1.5 1.5 0 0 0 3 9.5V16h2v3h2v2h10v-2h2v-3h2ZM8 4h8v4H8ZM6 18v-4h1v4Zm10 2H8v-6h8v6Zm2-2h-1v-4h1v4Zm2-3h-1v-2H5v2H4V9.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 .5.5ZM6 11h4v1H6Z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
