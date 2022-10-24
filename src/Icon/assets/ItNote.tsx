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
        <title id={titleId}>{'Note'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M18.5 4h-13A1.5 1.5 0 0 0 4 5.5v13A1.5 1.5 0 0 0 5.5 20h10.2l4.3-4.3V5.5A1.5 1.5 0 0 0 18.5 4ZM5 18.5v-13a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5V15h-2.5a1.5 1.5 0 0 0-1.5 1.5V19H5.5a.5.5 0 0 1-.5-.5ZM18.3 16 16 18.3v-1.8a.5.5 0 0 1 .5-.5ZM16 9H8V8h8Zm0 2H8v-1h8Zm-2 1v1H8v-1Z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
