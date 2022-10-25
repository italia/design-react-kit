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
        <title id={titleId}>{'Mail'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M20.5 5h-17A1.5 1.5 0 0 0 2 6.5v11A1.5 1.5 0 0 0 3.5 19h17a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 20.5 5Zm-.3 1-7.1 7.2a1.6 1.6 0 0 1-2.2 0L3.8 6ZM3 17.3V6.6L8.3 12Zm.7.7L9 12.7l1.2 1.2a2.7 2.7 0 0 0 3.6 0l1.2-1.2 5.3 5.3Zm12-6L21 6.6v10.7Z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
