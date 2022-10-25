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
        <title id={titleId}>{'Locked'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M16.5 12H16V7a4 4 0 0 0-8 0v5h-.5a1.1 1.1 0 0 0-1.1 1.1v6.8A1.1 1.1 0 0 0 7.5 21h9a1.1 1.1 0 0 0 1.1-1.1v-6.8a1.1 1.1 0 0 0-1.1-1.1ZM9 7a3 3 0 0 1 6 0v5H9Zm7.6 12.9a.1.1 0 0 1-.1.1h-9a.1.1 0 0 1-.1-.1v-6.8h9.2ZM13 15.5a.8.8 0 0 1-.5.8v1.5h-1v-1.5a.8.8 0 0 1-.5-.8 1 1 0 0 1 2 0Z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
