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
        <title id={titleId}>{'Share'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M17.5 15a2.5 2.5 0 0 0-2 1l-7.6-3.4A1.3 1.3 0 0 0 8 12a1.3 1.3 0 0 0-.1-.6L15.5 8a2.5 2.5 0 1 0-.5-1.5 1.3 1.3 0 0 0 .1.6l-7.6 3.4a2.5 2.5 0 1 0 0 3l7.6 3.4a1.3 1.3 0 0 0-.1.6 2.5 2.5 0 1 0 2.5-2.5Zm0-10A1.5 1.5 0 0 1 19 6.5a1.5 1.5 0 0 1-3 0A1.5 1.5 0 0 1 17.5 5Zm-12 8.5a1.5 1.5 0 0 1 0-3 1.5 1.5 0 0 1 0 3Zm12 5.5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5Z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
