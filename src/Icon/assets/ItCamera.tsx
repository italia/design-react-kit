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
        <title id={titleId}>{'Camera'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M20.5 20h-17A1.5 1.5 0 0 1 2 18.5v-10A1.5 1.5 0 0 1 3.5 7h4.3l1.5-2.3a1.5 1.5 0 0 1 1.2-.7h3a1.5 1.5 0 0 1 1.2.7L16.2 7h4.3A1.5 1.5 0 0 1 22 8.5v10a1.5 1.5 0 0 1-1.5 1.5ZM3.5 8a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h17a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5h-4.8l-1.8-2.8-.4-.2h-3l-.4.2L8.3 8ZM12 18a5 5 0 1 1 5-5 5 5 0 0 1-5 5Zm0-9a4 4 0 1 0 4 4 4 4 0 0 0-4-4ZM7 5H4v1h3Z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
