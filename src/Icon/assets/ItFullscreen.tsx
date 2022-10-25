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
        <title id={titleId}>{'Fullscreen'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M4 20h4.5v1H3v-5.5h1zM3 8.5h1V4h4.5V3H3zM20 20h-4.5v1H21v-5.5h-1zM15.5 3v1H20v4.5h1V3z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
