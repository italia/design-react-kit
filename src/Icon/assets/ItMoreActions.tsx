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
        <title id={titleId}>{'More Actions'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M6 10a2 2 0 1 0 2 2 2 2 0 0 0-2-2Zm0 3a1 1 0 0 1 0-2 1 1 0 0 1 0 2Zm6-3a2 2 0 1 0 2 2 2 2 0 0 0-2-2Zm0 3a1 1 0 1 1 1-1 .9.9 0 0 1-1 1Zm6-3a2 2 0 1 0 2 2 2 2 0 0 0-2-2Zm0 3a1 1 0 1 1 1-1 .9.9 0 0 1-1 1Z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
