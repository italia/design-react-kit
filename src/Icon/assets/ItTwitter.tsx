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
      xmlns='http://www.w3.org/2000/svg'
      role='img'
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{'Logo Twitter'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path fill='none' d='M0 0h24v24H0z' />
      <path d='M8.08 20a10.93 10.93 0 0 0 11-11v-.5a8 8 0 0 0 1.92-2 7.85 7.85 0 0 1-2.22.61A3.89 3.89 0 0 0 20.48 5a8 8 0 0 1-2.48.91 3.87 3.87 0 0 0-6.59 3.52 11 11 0 0 1-8-4 3.85 3.85 0 0 0 1.19 5.16 3.76 3.76 0 0 1-1.75-.48A3.87 3.87 0 0 0 6 13.91a3.73 3.73 0 0 1-1 .14 4.3 4.3 0 0 1-.73-.05 3.87 3.87 0 0 0 3.61 2.68 7.73 7.73 0 0 1-4.8 1.66 7 7 0 0 1-.92-.06A10.9 10.9 0 0 0 8.08 20' />
    </svg>
  );
};
