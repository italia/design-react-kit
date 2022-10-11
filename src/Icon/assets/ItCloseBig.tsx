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
      <path d='M12.7 12l6.7 6.6-.8.8-6.6-6.7-6.6 6.7-.8-.8 6.7-6.6-6.7-6.6.8-.8 6.6 6.7 6.6-6.7.8.8z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
