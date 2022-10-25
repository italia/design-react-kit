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
        <title id={titleId}>{'List'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M4 12a.9.9 0 0 1-1 1 1 1 0 0 1 0-2 .9.9 0 0 1 1 1ZM3 4.5a.9.9 0 0 0-1 1 .9.9 0 0 0 1 1 .9.9 0 0 0 1-1 .9.9 0 0 0-1-1Zm0 13a1 1 0 0 0 0 2 1 1 0 0 0 0-2ZM6 5v1h16V5Zm0 7.5h16v-1H6ZM6 19h16v-1H6Z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
