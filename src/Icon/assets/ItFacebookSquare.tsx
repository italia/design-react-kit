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
      width={24}
      height={24}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      role='img'
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{'Logo Facebook Square'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path fill='none' d='M0 0h24v24H0z' />
      <path d='M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.63v-6.95h-2.37v-2.74h2.34v-2a3.28 3.28 0 0 1 3.5-3.6c.705 0 1.41.04 2.11.12v2.44h-1.44c-1.13 0-1.34.53-1.34 1.32v1.74h2.7l-.35 2.72h-2.35v7H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z' />
    </svg>
  );
};
