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
        <title id={titleId}>{'Circle Check'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='m17.1 7.9.7.7-7.8 7.6-4.7-4.6.7-.7 4 3.9ZM22 12A10 10 0 1 1 12 2a10 10 0 0 1 10 10Zm-1 0a9 9 0 1 0-9 9 9 9 0 0 0 9-9Z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
