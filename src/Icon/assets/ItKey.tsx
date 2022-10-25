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
        <title id={titleId}>{'Key'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M18 10a2 2 0 1 0 2 2 2 2 0 0 0-2-2Zm0 3a1 1 0 1 1 1-1 .9.9 0 0 1-1 1Zm-1-6a5.1 5.1 0 0 0-4.6 3H3.3l-2 2 3 3H7v-1h.3l1 1H11v-1h1.4a5.1 5.1 0 0 0 4.6 3 5 5 0 0 0 0-10Zm0 9a4.1 4.1 0 0 1-3.8-2.7V13H10v1H8.7l-1-1H6v1H4.7l-2-2 1-1h9.4v-.3A4.1 4.1 0 0 1 17 8a4 4 0 0 1 0 8Z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
