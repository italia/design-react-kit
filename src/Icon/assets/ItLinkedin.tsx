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
        <title id={titleId}>{'Logo Linkedin'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path fill='none' d='M0 0h24v24H0z' />
      <path d='M16.53 8.68A3.94 3.94 0 0 0 13 10.62V9H9.37v12h3.73v-5.95c0-1.57.29-3.09 2.24-3.09 1.95 0 1.93 1.8 1.93 3.19V21H21v-6.6c0-3.23-.69-5.72-4.47-5.72ZM5.16 3a2.17 2.17 0 1 0 2.16 2.18A2.16 2.16 0 0 0 5.16 3ZM3.29 9v12H7V9H3.29Zm13.24-.3A3.94 3.94 0 0 0 13 10.62V9H9.37v12h3.73v-5.95c0-1.57.29-3.09 2.24-3.09 1.95 0 1.93 1.8 1.93 3.19V21H21v-6.6c0-3.23-.69-5.72-4.47-5.72v.02ZM3.29 21H7V9H3.29v12ZM5.16 3a2.17 2.17 0 1 0 2.16 2.18A2.16 2.16 0 0 0 5.16 3Z' />
    </svg>
  );
};
