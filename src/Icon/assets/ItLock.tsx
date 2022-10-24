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
        <title id={titleId}>{'Lock'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M18.5 8.5H17V8A5 5 0 0 0 7 8v.5H5.5A1.5 1.5 0 0 0 4 10v8.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V10a1.5 1.5 0 0 0-1.5-1.5ZM8 8a4 4 0 0 1 8 0v.5H8Zm11 10.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5Z' />
      <path d='M12 13.25a1 1 0 1 1-1 1 1 1 0 0 1 1-1m0-1a2 2 0 1 0 2 2 2 2 0 0 0-2-2Z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
