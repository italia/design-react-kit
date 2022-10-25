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
        <title id={titleId}>{'Comment'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M19 3H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2v5.4l1.7-1.7 3.7-3.7H19a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm1 12a.9.9 0 0 1-1 1h-7l-4 4v-4H5a.9.9 0 0 1-1-1V5a.9.9 0 0 1 1-1h14a.9.9 0 0 1 1 1ZM9 10a.9.9 0 0 1-1 1 .9.9 0 0 1-1-1 .9.9 0 0 1 1-1 .9.9 0 0 1 1 1Zm4 0a1 1 0 0 1-2 0 1 1 0 0 1 2 0Zm4 0a1 1 0 0 1-2 0 1 1 0 0 1 2 0Z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
