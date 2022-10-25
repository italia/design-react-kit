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
        <title id={titleId}>{'Password Visible'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M21.8 11.5a11 11 0 0 0-19.6 0L2 12l.2.5a11 11 0 0 0 19.6 0l.2-.5Zm-9.8 6A9.8 9.8 0 0 1 3.1 12 9.8 9.8 0 0 1 12 6.5a9.8 9.8 0 0 1 8.9 5.5 9.8 9.8 0 0 1-8.9 5.5ZM12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4Zm0 7a3 3 0 1 1 3-3 2.9 2.9 0 0 1-3 3Z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
