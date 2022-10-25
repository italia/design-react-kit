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
        <title id={titleId}>{'Logo Medium'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path fill='none' d='M0 0h24v24H0z' />
      <path d='M5 7.63A.72.72 0 0 0 4.82 7L3.13 5v-.3h5.22l4 8.84 3.54-8.84h5V5l-1.42 1.4a.43.43 0 0 0-.16.4v10.12a.45.45 0 0 0 .16.41l1.4 1.37v.3h-7v-.3l1.45-1.41c.14-.14.14-.18.14-.4V8.71L11.37 19h-.55L6.12 8.71v6.88a.93.93 0 0 0 .26.79l1.89 2.29V19H2.91v-.3l1.89-2.32a.92.92 0 0 0 .2-.79V7.63Z' />
    </svg>
  );
};
