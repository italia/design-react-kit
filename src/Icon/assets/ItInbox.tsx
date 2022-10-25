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
        <title id={titleId}>{'Inbox'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M4 2v14h3.7l1 2h6.6l1-2H20V2H4zm15 13h-3.3l-1 2H9.3l-1-2H5V3h14v12z' />
      <path d='M19 17h1v5H4v-5h1v4h14zM7 5h10v1H7zM7 8h10v1H7zM7 11h10v1H7z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
