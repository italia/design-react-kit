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
        <title id={titleId}>{'\\Close'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='m12.7 12 3.7 3.6-.8.8-3.6-3.7-3.6 3.7-.8-.8 3.7-3.6-3.7-3.6.8-.8 3.6 3.7 3.6-3.7.8.8Z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
