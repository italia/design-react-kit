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
      <path d='M12.8 22h-1.4v-2.1h1.4zm-.1-4.9h-1.2a9.7 9.7 0 01-.1-1.7 2.7 2.7 0 01.3-1.2 5.6 5.6 0 01.7-1.3l2.3-2.1a9.6 9.6 0 001.8-2.1 4.5 4.5 0 00.5-2.3 3 3 0 00-1.1-2.6 6.2 6.2 0 00-3.4-.7 22.9 22.9 0 00-3.6.5l-1 .3-.2-1.2h.1a18.1 18.1 0 014.7-.8 7.4 7.4 0 014.3 1 4.2 4.2 0 011.4 3.5 5 5 0 01-.5 2.7 8.6 8.6 0 01-1.9 2.2 19.7 19.7 0 00-1.8 1.6 6.2 6.2 0 00-.9 1.2 2.3 2.3 0 00-.4 1.4z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
