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
      <path d='M18.6 10.1L12 3.5l-6.6 6.6.7.7 5.4-5.3V21h1V5.5l5.4 5.3zM12 5z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
