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
        <title id={titleId}>{'Info Circle'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 19a9 9 0 1 1 9-9 9 9 0 0 1-9 9Zm-.7-15h1.5v2h-1.5Zm0 3h1.5v9h-1.5Z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
