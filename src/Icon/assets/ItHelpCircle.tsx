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
        <title id={titleId}>{'Help Cirlce'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 19a9 9 0 1 1 9-9 9 9 0 0 1-9 9Zm-1.2-4.5H12v1.8h-1.2Zm4.5-8a4.2 4.2 0 0 1-.3 1.8 5.4 5.4 0 0 1-1.3 1.4L12.3 13a2.8 2.8 0 0 0-.4 1.2v.6H11a3 3 0 0 1-.2-1 2.1 2.1 0 0 1 .5-1.2 9 9 0 0 1 1.4-1.4 6.4 6.4 0 0 0 1.2-1.3 2.6 2.6 0 0 0 .3-1.4 1.7 1.7 0 0 0-.6-1.4 3.5 3.5 0 0 0-2-.4L9.3 7h-.5v-.8a10.2 10.2 0 0 1 3-.5 4.9 4.9 0 0 1 2.7.6 2.7 2.7 0 0 1 .8 2.2Z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
