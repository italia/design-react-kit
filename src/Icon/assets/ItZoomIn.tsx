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
        <title id={titleId}>{'Zoom In'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M10.4 9.5h3.3v1h-3.3v3.2h-1v-3.2H6.2v-1h3.2V6.2h1Zm10.7 12.4L15.3 16a8.3 8.3 0 0 1-5.3 2 8 8 0 1 1 8-8 8.3 8.3 0 0 1-2 5.3l5.9 5.8ZM17 10a7 7 0 1 0-7 7 7 7 0 0 0 7-7Z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
