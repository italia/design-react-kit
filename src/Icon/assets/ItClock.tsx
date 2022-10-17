import * as React from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const component = ({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d='M11.5 5h1v7.5H7v-1h4.5zM22 12A10 10 0 1112 2a10 10 0 0110 10zm-1 0a9 9 0 10-9 9 9 9 0 009-9z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
