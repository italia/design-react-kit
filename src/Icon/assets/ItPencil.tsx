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
        <title id={titleId}>{'Pencil'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M20.5 3.5a2.9 2.9 0 0 0-2.1-.9 3.1 3.1 0 0 0-2.2.9L4.6 15.2l-1 5.2 5.2-1L20.5 7.8a3 3 0 0 0 0-4.3Zm-5.7 2.8.7-.7 2.9 2.9-.7.7Zm-.7.8 1.1 1-8.4 8.4-1.1-1.1ZM5.7 18.3a.7.7 0 0 0-.6-.3l.3-1.5 2.1 2.1-1.5.3a.7.7 0 0 0-.3-.6Zm2.9 0-1.1-1.1 8.4-8.4 1 1.1ZM19.8 7.1l-.7.7-2.9-2.9.7-.7a2.2 2.2 0 0 1 1.5-.6 2 2 0 0 1 1.4.6 2.1 2.1 0 0 1 0 2.9Z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
