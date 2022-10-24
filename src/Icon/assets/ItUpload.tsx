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
        <title id={titleId}>{'Upload'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='m8.4 7.3-.7-.7L12 2.3l4.3 4.3-.7.7-3.1-3.1v9.3h-1V4.2ZM19 12v7.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V12H4v7.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V12Z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
