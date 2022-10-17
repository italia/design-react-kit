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
        <title id={titleId}>{'Tool'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M7.7 5a3.1 3.1 0 0 1 1.7.5 3.1 3.1 0 0 1 1.6 3 3 3 0 0 0 .8 2.4l6.3 6.3a1 1 0 0 1 .2 1.3 1 1 0 0 1-.8.5.9.9 0 0 1-.7-.3l-6.4-6.4a3 3 0 0 0-2.1-.8h-.6a2.8 2.8 0 0 1-2.2-1h2.7V6.4H5.1a2.7 2.7 0 0 1 1.1-1A2.8 2.8 0 0 1 7.7 5m0-1a4.6 4.6 0 0 0-2 .5 4.1 4.1 0 0 0-2.1 2.9h3.6v2.1H3.7a5.4 5.4 0 0 0 1 1.8 4.4 4.4 0 0 0 3 1.2h.6a2.4 2.4 0 0 1 1.4.5l6.4 6.4a2 2 0 0 0 1.4.6 1.9 1.9 0 0 0 1.6-.9 2 2 0 0 0-.3-2.6l-6.3-6.3a1.8 1.8 0 0 1-.5-1.6 4.4 4.4 0 0 0-2-4A4.6 4.6 0 0 0 7.7 4Z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
