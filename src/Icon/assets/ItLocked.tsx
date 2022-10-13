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
      <path d='M16.5 12H16V7a4 4 0 00-8 0v5h-.5a1.1 1.1 0 00-1.1 1.1v6.8A1.1 1.1 0 007.5 21h9a1.1 1.1 0 001.1-1.1v-6.8a1.1 1.1 0 00-1.1-1.1zM9 7a3 3 0 016 0v5H9zm7.6 12.9a.1.1 0 01-.1.1h-9a.1.1 0 01-.1-.1v-6.8h9.2zM13 15.5a.8.8 0 01-.5.8v1.5h-1v-1.5a.8.8 0 01-.5-.8 1 1 0 012 0z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
