import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const component = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d='M15.682 13.735a.667.667 0 1 1 .002-1.334.667.667 0 0 1-.002 1.334Zm-7.364 0A.667.667 0 1 1 8.32 12.4a.667.667 0 0 1-.002 1.334Zm7.603-4.013 1.332-2.307a.277.277 0 0 0-.48-.277l-1.348 2.336A8.22 8.22 0 0 0 12 8.74a8.22 8.22 0 0 0-3.425.733L7.228 7.138a.277.277 0 0 0-.48.277L8.08 9.722C5.793 10.965 4.229 13.28 4 16.015h16c-.229-2.735-1.793-5.05-4.079-6.293Z' />
    </svg>
  );
};
