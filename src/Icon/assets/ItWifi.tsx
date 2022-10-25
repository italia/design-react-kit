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
        <title id={titleId}>{'Wi-Fi'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M22 19h-1c0-8.8-7.2-16-16-16V2c9.4 0 17 7.6 17 17z' />
      <path d='M5 7v1c6.1 0 11 4.9 11 11h1c0-6.6-5.4-12-12-12zM5 12v1c3.3 0 6 2.7 6 6h1c0-3.9-3.1-7-7-7zM5 17c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 3c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
