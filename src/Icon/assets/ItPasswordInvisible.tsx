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
        <title id={titleId}>{'Password Invisible'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M15 12a3.2 3.2 0 0 0-.7-1.9l.4-1.1a4.2 4.2 0 0 1 1.3 3 4 4 0 0 1-3.9 4l.4-1.1A2.9 2.9 0 0 0 15 12ZM3.1 12A9.8 9.8 0 0 1 12 6.5h.4l.4-.9H12a10.9 10.9 0 0 0-9.8 6L2 12l.2.5a11 11 0 0 0 6.1 5.3l.3-.9A9.8 9.8 0 0 1 3.1 12Zm18.7-.5a11 11 0 0 0-6.1-5.3l-.3.9a9.8 9.8 0 0 1 5.5 4.9 9.8 9.8 0 0 1-8.9 5.5h-.4l-.4.9h.8a10.9 10.9 0 0 0 9.8-6l.2-.4ZM11.5 9.1l.4-1.1A4 4 0 0 0 8 12a4.2 4.2 0 0 0 1.3 3l.4-1.1A3.2 3.2 0 0 1 9 12a2.9 2.9 0 0 1 2.5-2.9Zm3.1-5.7L8.5 20.3l.9.3 6.1-16.9Z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
