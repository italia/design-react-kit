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
        <title id={titleId}>{'Chart line'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M21 20v1H3V3h1v17z' />
      <path d='m10.5 9.2 2.5 2.5 6-6v3.8h1V4h-5.5v1h3.8L13 10.3l-2.5-2.5-4.3 4.3.6.8z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
