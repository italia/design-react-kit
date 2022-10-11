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
      <path d='M12 7.5a4.5 4.5 0 104.5 4.5A4.5 4.5 0 0012 7.5zm0 8a3.5 3.5 0 113.5-3.5 3.5 3.5 0 01-3.5 3.5zm9.8-1.6A12.3 12.3 0 0022 12a12.3 12.3 0 00-.2-1.9l-2.1-.3a8.7 8.7 0 00-.7-1.7l1.3-1.7a8.7 8.7 0 00-2.7-2.7L15.9 5l-1.7-.7-.3-2.1L12 2l-1.9.2-.3 2.1-1.7.7-1.7-1.3a8.7 8.7 0 00-2.7 2.7L5 8.1a8.7 8.7 0 00-.7 1.7l-2.1.3A12.3 12.3 0 002 12a12.3 12.3 0 00.2 1.9l2.1.3a8.7 8.7 0 00.7 1.7l-1.3 1.7a8.7 8.7 0 002.7 2.7L8.1 19l1.7.7.3 2.1 1.9.2 1.9-.2.3-2.1 1.7-.7 1.7 1.3a8.7 8.7 0 002.7-2.7L19 15.9a8.7 8.7 0 00.7-1.7zm-2.9-.7l-.2.7a3.9 3.9 0 01-.6 1.5l-.3.6.4.5.8 1.1a9.3 9.3 0 01-1.4 1.4l-1.1-.8-.5-.4-.6.3a3.9 3.9 0 01-1.5.6l-.7.2v.7l-.2 1.3h-2l-.2-1.3v-.7l-.7-.2a3.9 3.9 0 01-1.5-.6l-.6-.3-.5.4-1.1.8A9.3 9.3 0 015 17.6l.8-1.1.4-.5-.3-.6a3.9 3.9 0 01-.6-1.5l-.2-.7h-.7L3.1 13a3.4 3.4 0 01-.1-1 3.4 3.4 0 01.1-1l1.3-.2h.7l.2-.7a3.9 3.9 0 01.6-1.5l.3-.6-.4-.5L5 6.4 6.4 5l1.1.8.5.4.6-.3a3.9 3.9 0 011.5-.6l.7-.2v-.7l.2-1.3h2l.2 1.3v.7l.7.2a3.9 3.9 0 011.5.6l.6.3.5-.4 1.1-.8A9.3 9.3 0 0119 6.4l-.8 1.1-.4.5.3.6a3.9 3.9 0 01.6 1.5l.2.7h.7l1.3.2a3.4 3.4 0 01.1 1 3.4 3.4 0 01-.1 1l-1.3.2z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
