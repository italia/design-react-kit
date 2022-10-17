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
        <title id={titleId}>{'Logo Linkedin Square'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path fill='none' d='M0 0h24v24H0z' />
      <path d='M19.67 3H4.33A1.32 1.32 0 0 0 3 4.3v15.4A1.32 1.32 0 0 0 4.33 21h15.34A1.32 1.32 0 0 0 21 19.7V4.3A1.32 1.32 0 0 0 19.67 3ZM8.34 18.34H5.67V9.75h2.67v8.59ZM7 8.57A1.55 1.55 0 1 1 8.55 7 1.54 1.54 0 0 1 7 8.57Zm11.34 9.77h-2.67v-4.18c0-1 0-2.28-1.39-2.28s-1.6 1.09-1.6 2.21v4.25H10V9.75h2.56v1.17a2.83 2.83 0 0 1 2.53-1.39c2.7 0 3.2 1.78 3.2 4.1l.05 4.71Z' />
    </svg>
  );
};
