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
      <path d='M5.67 15.66a2.67 2.67 0 1 0 2.67 2.67 2.68 2.68 0 0 0-2.67-2.67Z' />
      <path d='M3.28 8.88a.28.28 0 0 0-.28.28v3.39a.29.29 0 0 0 .28.28 7.9 7.9 0 0 1 7.89 7.89.29.29 0 0 0 .28.28h3.41a.28.28 0 0 0 .27-.28A11.93 11.93 0 0 0 3.28 8.88Z' />
      <path d='M21 20.72A17.84 17.84 0 0 0 3.28 3a.29.29 0 0 0-.28.28v3.49a.28.28 0 0 0 .28.23A13.69 13.69 0 0 1 17 20.72a.29.29 0 0 0 .28.28h3.5a.29.29 0 0 0 .29-.28Z' />
    </svg>
  );
};
