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
        <title id={titleId}>{'Logo Facebook'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path fill='none' d='M0 0h24v24H0z' />
      <path d='M13.55 22v-9.11h3.07l.46-3.56h-3.53V7.05c0-1 .29-1.73 1.77-1.73h1.87V2.14A25.14 25.14 0 0 0 14.45 2c-2.72 0-4.58 1.66-4.58 4.7v2.62H6.81v3.57h3.06V22h3.68Z' />
    </svg>
  );
};
