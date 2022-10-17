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
      <path d='M21.8 11.5a11 11 0 00-19.6 0L2 12l.2.5a11 11 0 0019.6 0l.2-.5zm-9.8 6A9.8 9.8 0 013.1 12 9.8 9.8 0 0112 6.5a9.8 9.8 0 018.9 5.5 9.8 9.8 0 01-8.9 5.5zM12 8a4 4 0 104 4 4 4 0 00-4-4zm0 7a3 3 0 113-3 2.9 2.9 0 01-3 3z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
