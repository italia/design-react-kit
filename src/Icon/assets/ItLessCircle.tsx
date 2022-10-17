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
        <title id={titleId}>{'Less circle'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M12 3a9 9 0 0 1 6.36 15.36A9 9 0 0 1 5.64 5.62 8.93 8.93 0 0 1 12 3m0-1a10 10 0 1 0 7.07 2.93A9.93 9.93 0 0 0 12 2Z' />
      <rect x={7} y={11.25} width={10} height={1.5} rx={0.75} />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
