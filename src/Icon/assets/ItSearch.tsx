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
      <path d='M21.9 21.1L16 15.3a8.3 8.3 0 002-5.3 8 8 0 10-8 8 8.3 8.3 0 005.3-2l5.8 5.9zM10 17a7 7 0 117-7 7 7 0 01-7 7z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
