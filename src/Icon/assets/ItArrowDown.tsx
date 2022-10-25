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
        <title id={titleId}>{'Arrow Down'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='m17.9 13.2-5.4 5.3V3h-1v15.5l-5.4-5.3-.7.7 6.6 6.5 6.6-6.5ZM12 19Z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
