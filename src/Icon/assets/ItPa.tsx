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
        <title id={titleId}>{'PA'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M3 21h18v1H3Zm0-1h18v-1H3ZM22 9H2l10-7ZM5.2 8h13.6L12 3.2ZM6 18v-8H5v8Zm4 0v-8H9v8Zm5 0v-8h-1v8Zm4 0v-8h-1v8Z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
