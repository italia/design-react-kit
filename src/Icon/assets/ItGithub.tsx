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
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path fill='none' d='M0 0h24v24H0z' />
      <path d='M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7C6.73 19.91 6.14 18 6.14 18A2.69 2.69 0 005 16.5c-.91-.62.07-.61.07-.61a2.13 2.13 0 011.53 1 2.14 2.14 0 002.91.83 2.16 2.16 0 01.63-1.34c-2.14-.21-4.52-1.07-4.52-4.9a3.89 3.89 0 011-2.69 3.57 3.57 0 01.1-2.64s.84-.27 2.75 1a9.63 9.63 0 015 0c1.91-1.29 2.75-1 2.75-1 .37.835.405 1.78.1 2.64a3.89 3.89 0 011 2.69c0 3.84-2.34 4.68-4.57 4.93.482.49.73 1.164.68 1.85v2.75c0 .33.18.58.69.48A10 10 0 0012 2z' />
    </svg>
  );
};
