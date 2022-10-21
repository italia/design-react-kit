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
        <title id={titleId}>{'Clip'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M11 22a2.9 2.9 0 0 1-3-3V6a4 4 0 0 1 8 0v10h-1V6a3 3 0 0 0-6 0v13a2 2 0 0 0 4 0V8a1 1 0 0 0-2 0v8h-1V8a2 2 0 0 1 4 0v11a2.9 2.9 0 0 1-3 3Z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
