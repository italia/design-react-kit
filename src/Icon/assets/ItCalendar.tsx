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
        <title id={titleId}>{'Calendar'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M20.5 4H17V3h-1v1H8V3H7v1H3.5A1.5 1.5 0 0 0 2 5.5v13A1.5 1.5 0 0 0 3.5 20h17a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 20.5 4Zm.5 14.5a.5.5 0 0 1-.5.5h-17a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5H7v1h1V5h8v1h1V5h3.5a.5.5 0 0 1 .5.5ZM4 8h16v1H4Z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
