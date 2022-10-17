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
      <path d='M17.9 13.2l-5.4 5.3V3h-1v15.5l-5.4-5.3-.7.7 6.6 6.5 6.6-6.5zM12 19z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
