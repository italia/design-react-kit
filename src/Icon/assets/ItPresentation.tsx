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
        <title id={titleId}>{'Presentation'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M4 5v10.6A2.4 2.4 0 0 0 6.4 18h3.1l-1.1 4h1l1.1-4h2.7l1.2 4h1l-1.2-4h3.5a2.3 2.3 0 0 0 2.3-2.3V5Zm15 10.7a1.3 1.3 0 0 1-1.3 1.3H6.4A1.4 1.4 0 0 1 5 15.6V6h14ZM21 3v1H3V3Zm-9 13a4.5 4.5 0 1 0-4.5-4.5A4.5 4.5 0 0 0 12 16Zm-.5-7.9V11H8.6a3.4 3.4 0 0 1 2.9-2.9Zm1 3.9V8a3.5 3.5 0 0 1-.5 7 3.4 3.4 0 0 1-3.4-3Z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
