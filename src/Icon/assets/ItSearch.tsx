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
        <title id={titleId}>{'Search'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M21.9 21.1 16 15.3a8.3 8.3 0 0 0 2-5.3 8 8 0 1 0-8 8 8.3 8.3 0 0 0 5.3-2l5.8 5.9ZM10 17a7 7 0 1 1 7-7 7 7 0 0 1-7 7Z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
