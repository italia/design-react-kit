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
      <path d='M14.8 12H9.2a1 1 0 01-.7-1.7L12 6.8l3.5 3.5a1 1 0 01-.7 1.7z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
