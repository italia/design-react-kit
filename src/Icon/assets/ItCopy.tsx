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
        <title id={titleId}>{'Copy'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M19.5 4H18v-.6A1.5 1.5 0 0 0 16.5 2h-11A1.5 1.5 0 0 0 4 3.4v15.2A1.5 1.5 0 0 0 5.5 20H7v.6A1.5 1.5 0 0 0 8.5 22h11a1.5 1.5 0 0 0 1.5-1.4V5.4A1.5 1.5 0 0 0 19.5 4ZM5 18.6V3.4a.5.5 0 0 1 .5-.4h11a.5.5 0 0 1 .5.4v15.2a.5.5 0 0 1-.5.4h-11a.5.5 0 0 1-.5-.4Zm15 2a.5.5 0 0 1-.5.4h-11a.5.5 0 0 1-.5-.4V20h8.5a1.5 1.5 0 0 0 1.5-1.4V5h1.5a.5.5 0 0 1 .5.4Z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
