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
        <title id={titleId}>{'Logo Twitter Square'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path fill='none' d='M0 0h24v24H0z' />
      <path d='M19.5 22h-15A2.5 2.5 0 0 1 2 19.5v-15A2.5 2.5 0 0 1 4.5 2h15A2.5 2.5 0 0 1 22 4.5v15a2.5 2.5 0 0 1-2.5 2.5Zm-9.82-4.92A7.24 7.24 0 0 0 17 9.79v-.33a5.22 5.22 0 0 0 1.28-1.33 5.22 5.22 0 0 1-1.48.4 2.56 2.56 0 0 0 1.14-1.42 4.93 4.93 0 0 1-1.64.62 2.53 2.53 0 0 0-1.86-.81 2.57 2.57 0 0 0-2.57 2.57c.003.195.026.39.07.58a7.26 7.26 0 0 1-5.32-2.68 2.59 2.59 0 0 0 .8 3.43 2.78 2.78 0 0 1-1.16-.32 2.57 2.57 0 0 0 2.05 2.52 2.46 2.46 0 0 1-1.15.04 2.55 2.55 0 0 0 2.39 1.78A5.13 5.13 0 0 1 6.37 16a6.08 6.08 0 0 1-.61 0 7.23 7.23 0 0 0 3.92 1.14v-.06Z' />
    </svg>
  );
};
