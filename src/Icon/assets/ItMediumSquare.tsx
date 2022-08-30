import * as React from 'react';
export const component = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path d='M3 3h18v18H3V3zm4.3 11.4c0 .2 0 .4-.2.5l-1.3 1.5v.2h3.6v-.2l-1.3-1.5c-.1-.1-.1-.3-.1-.5V9.7l3.2 6.9h.4l2.7-6.9v5.5c0 .2 0 .2-.1.3l-1 1v.2h4.7v-.2l-.9-1c-.1-.1-.1-.2-.1-.3V8.5c0-.1 0-.2.1-.3l1-.9v-.2h-3.4L12.2 13 9.5 7.1H6v.2l1.1 1.4c.1 0 .2.2.2.3v5.4z' />
    </svg>
  );
};
