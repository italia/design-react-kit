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
        <title id={titleId}>{'Video'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M17.5 7.3V6A1.5 1.5 0 0 0 16 4.5H5.5A1.5 1.5 0 0 0 4 6v8a1.5 1.5 0 0 0 1.5 1.5h3.4L7.4 21h1l1.6-5.5h1.8l1.6 5.5h1l-1.6-5.5H16a1.5 1.5 0 0 0 1.5-1.5v-1.3l4 1.5V5.8Zm3 5.5-4-1.5V14a.5.5 0 0 1-.5.5H5.5A.5.5 0 0 1 5 14V6a.5.5 0 0 1 .5-.5H16a.5.5 0 0 1 .5.5v2.7l4-1.5ZM2 8h1v4H2Z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
