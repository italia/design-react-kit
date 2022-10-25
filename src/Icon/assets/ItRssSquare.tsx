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
      {title ? <title id={titleId}>{title}</title> : null}
      <path fill='none' d='M0 0h24v24H0z' />
      <path d='M17.62 3H6.37A3.37 3.37 0 0 0 3 6.38v11.24A3.37 3.37 0 0 0 6.37 21h11.25A3.38 3.38 0 0 0 21 17.62V6.38A3.38 3.38 0 0 0 17.62 3ZM7.5 18.75a2.25 2.25 0 1 1 2.25-2.25 2.25 2.25 0 0 1-2.25 2.25Zm4.5 0A6.75 6.75 0 0 0 5.25 12V9.75a9 9 0 0 1 9 9Zm4.5 0A11.25 11.25 0 0 0 5.25 7.5V5.25a13.5 13.5 0 0 1 13.5 13.5Z' />
    </svg>
  );
};
