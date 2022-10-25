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
        <title id={titleId}>{'Pin'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M18.1 14 15 10.3V4.6L16.3 2H7.7L9 4.6v5.7L5.9 14h5.6v8h1v-8ZM10 5h4v5h-4Zm4.7-2-.5 1H9.8l-.5-1Zm-5 8h4.6l1.6 2H8.1Z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
