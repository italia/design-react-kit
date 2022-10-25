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
        <title id={titleId}>{'More Items'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M12 18a1 1 0 1 1-1 1 .9.9 0 0 1 1-1m0-1a2 2 0 1 0 2 2 2 2 0 0 0-2-2Zm0-6a1 1 0 1 1-1 1 .9.9 0 0 1 1-1m0-1a2 2 0 1 0 2 2 2 2 0 0 0-2-2Zm0-6a.9.9 0 0 1 1 1 1 1 0 0 1-2 0 .9.9 0 0 1 1-1m0-1a2 2 0 1 0 2 2 2 2 0 0 0-2-2Z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
