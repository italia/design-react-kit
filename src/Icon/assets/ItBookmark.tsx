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
      <path d='M18 22.7l-6-6-6 6V2h12v20.7zm-6-7.4l5 5V3H7v17.3l5-5z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
