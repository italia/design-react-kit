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
        <title id={titleId}>{'Folder'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M20 6h-8l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm1 12a.9.9 0 0 1-1 1H4a.9.9 0 0 1-1-1V6a.9.9 0 0 1 1-1h5.6l1.7 1.7.3.3H20a.9.9 0 0 1 1 1ZM4 8h16v1H4Z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
