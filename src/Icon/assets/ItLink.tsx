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
      <path d='M13.4 13.4l-.7-.7a2.9 2.9 0 00.9-2.1 2.7 2.7 0 00-.9-2.1L9.2 4.9a3.2 3.2 0 00-4.3 0 3.2 3.2 0 000 4.3L7.8 12l-.7.7-2.9-2.8a4.2 4.2 0 010-5.7 4.2 4.2 0 015.7 0l3.5 3.6a3.6 3.6 0 011.2 2.8 3.6 3.6 0 01-1.2 2.8zm6.4 6.4a4.2 4.2 0 000-5.7l-2.9-2.8-.7.7 2.9 2.8a3.2 3.2 0 010 4.3 3.2 3.2 0 01-4.3 0l-3.5-3.6a2.7 2.7 0 01-.9-2.1 2.9 2.9 0 01.9-2.1l-.7-.7a3.6 3.6 0 00-1.2 2.8 3.6 3.6 0 001.2 2.8l3.5 3.6a3.8 3.8 0 002.8 1.1 3.9 3.9 0 002.9-1.1zm-6.7-6.7' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
