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
        <title id={titleId}>{'Link'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='m13.4 13.4-.7-.7a2.9 2.9 0 0 0 .9-2.1 2.7 2.7 0 0 0-.9-2.1L9.2 4.9a3.2 3.2 0 0 0-4.3 0 3.2 3.2 0 0 0 0 4.3L7.8 12l-.7.7-2.9-2.8a4.2 4.2 0 0 1 0-5.7 4.2 4.2 0 0 1 5.7 0l3.5 3.6a3.6 3.6 0 0 1 1.2 2.8 3.6 3.6 0 0 1-1.2 2.8Zm6.4 6.4a4.2 4.2 0 0 0 0-5.7l-2.9-2.8-.7.7 2.9 2.8a3.2 3.2 0 0 1 0 4.3 3.2 3.2 0 0 1-4.3 0l-3.5-3.6a2.7 2.7 0 0 1-.9-2.1 2.9 2.9 0 0 1 .9-2.1l-.7-.7a3.6 3.6 0 0 0-1.2 2.8 3.6 3.6 0 0 0 1.2 2.8l3.5 3.6a3.8 3.8 0 0 0 2.8 1.1 3.9 3.9 0 0 0 2.9-1.1Zm-6.7-6.7' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
