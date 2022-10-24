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
        <title id={titleId}>{'Hearing'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M20 9a6.8 6.8 0 0 1-3.5 6l-2 1.1a3.3 3.3 0 0 0-1.5 2.7A3.2 3.2 0 0 1 9.8 22h-.6a3.4 3.4 0 0 1-3-2.1l.9-.5A2.3 2.3 0 0 0 9.2 21h.6a2.1 2.1 0 0 0 1.6-.7 2 2 0 0 0 .6-1.5 4 4 0 0 1 2-3.5l2-1.2A5.9 5.9 0 0 0 19 9a6 6 0 0 0-6-6 6 6 0 0 0-4.8 2.4l-.8-.6A7 7 0 0 1 13 2a7 7 0 0 1 7 7ZM7.5 12A5.5 5.5 0 0 0 2 6.5v1a4.5 4.5 0 0 1 0 9v1A5.5 5.5 0 0 0 7.5 12ZM5 12a2.9 2.9 0 0 0-3-3v1a2 2 0 0 1 0 4v1a2.9 2.9 0 0 0 3-3Zm5 0a8 8 0 0 0-8-8v1a7 7 0 0 1 0 14v1a8 8 0 0 0 8-8Zm5.9.3a4.5 4.5 0 0 0 1.2-3.2 4.5 4.5 0 0 0-1.2-3.2 4.5 4.5 0 0 0-3.2-1.4A4.8 4.8 0 0 0 9.5 6l-.3.3.2.3a8.8 8.8 0 0 1 1.3 3v.4h.4a1.5 1.5 0 0 1 0 3v1a2.5 2.5 0 0 0 2.5-2.5 2.6 2.6 0 0 0-2-2.5 8.5 8.5 0 0 0-1.1-2.6 3.9 3.9 0 0 1 2.2-.9 3.5 3.5 0 0 1 2.4 1 3.5 3.5 0 0 1 1 2.6 3.5 3.5 0 0 1-1 2.6Z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
