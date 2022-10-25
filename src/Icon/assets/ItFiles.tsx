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
        <title id={titleId}>{'Files'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M15.7 2H7.5A1.5 1.5 0 0 0 6 3.5V4h-.5A1.5 1.5 0 0 0 4 5.5v15A1.5 1.5 0 0 0 5.5 22h11a1.5 1.5 0 0 0 1.5-1.5V20h.5a1.5 1.5 0 0 0 1.5-1.5V6.3Zm.3 1.7L18.3 6h-1.8a.5.5 0 0 1-.5-.5Zm1 16.8a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-15a.5.5 0 0 1 .5-.5H6v13.5A1.5 1.5 0 0 0 7.5 20H17Zm1.5-1.5h-11a.5.5 0 0 1-.5-.5v-15a.5.5 0 0 1 .5-.5H15v2.5A1.5 1.5 0 0 0 16.5 7H19v11.5a.5.5 0 0 1-.5.5ZM9 9h8v1H9Zm0 2h8v1H9Zm0 2h4v1H9Z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
