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
        <title id={titleId}>{'User'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M12 13a4 4 0 0 0 4-4V6a4 4 0 0 0-8 0v3a4 4 0 0 0 4 4ZM9 6a3 3 0 0 1 6 0v3a3 3 0 0 1-6 0Zm11 16h-1a7 7 0 0 0-14 0H4a8 8 0 0 1 16 0Z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
