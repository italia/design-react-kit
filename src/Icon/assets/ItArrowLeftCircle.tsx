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
        <title id={titleId}>{'Arrow Left Circle'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M7.7 11.5H17v1H7.8l3 3.1-.7.7L5.8 12l4.3-4.3.7.7ZM22 12A10 10 0 1 1 12 2a10 10 0 0 1 10 10Zm-1 0a9 9 0 1 0-9 9 9 9 0 0 0 9-9Z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
