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
        <title id={titleId}>{'Exchange Circle'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 19a9 9 0 1 1 9-9 9 9 0 0 1-9 9Zm5.1-8.9.8.8-4.3 4.3a1.5 1.5 0 0 1-1.1.4 1.5 1.5 0 0 1-1.1-.4L9 14.7V17H8v-4h4v1H9.7l2.4 2.5h.8Zm-6-4.6-4.2 4.4-.8-.8 4.3-4.3a1.5 1.5 0 0 1 1.1-.4 1.5 1.5 0 0 1 1.1.4L15 9.3V7h1v4h-4v-1h2.3l-2.4-2.5h-.8Z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
