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
        <title id={titleId}>{'Credit Card'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M20.5 5h-17A1.5 1.5 0 0 0 2 6.5v11A1.5 1.5 0 0 0 3.5 19h17a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 20.5 5ZM3 9h18v3H3Zm18 8.5a.5.5 0 0 1-.5.5h-17a.5.5 0 0 1-.5-.5V13h18ZM3 8V6.5a.5.5 0 0 1 .5-.5h17a.5.5 0 0 1 .5.5V8Zm5 7H4v-1h4Z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
