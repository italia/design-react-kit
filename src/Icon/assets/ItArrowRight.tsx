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
      <path d='M13.9 5.4l-.7.7 5.3 5.4H3v1h15.5l-5.3 5.4.7.7 6.6-6.6zM19 12z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
