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
      <path d='M6.9 11.5h10v1h-10zM22 12A10 10 0 1112 2a10 10 0 0110 10zm-1 0a9 9 0 10-9 9 9 9 0 009-9z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
