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
        <title id={titleId}>{'Horn'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M5 9a3 3 0 0 0 0 6h.5L7 19.3A2.5 2.5 0 0 0 9.3 21h.2a1.4 1.4 0 0 0 1.2-.6 1.4 1.4 0 0 0 .2-1.4l-1.3-4h1.8l8.6 3.8V4.7L11.4 9Zm5 10.3a.7.7 0 0 1-.1.5l-.4.2h-.2a1.5 1.5 0 0 1-1.4-1l-1.3-4h1.9ZM5 14a2 2 0 0 1 0-4h6v4Zm14 3.2-7-3V9.8l7-3.5ZM22 9v6h-1V9Z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
