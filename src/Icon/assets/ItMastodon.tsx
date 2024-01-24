import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const component = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d='M15.527 16.72c2.267-.27 4.24-1.66 4.489-2.93.39-2 .358-4.88.358-4.88 0-3.905-2.57-5.05-2.57-5.05-1.297-.592-3.523-.841-5.836-.86h-.057c-2.313.019-4.538.268-5.834.86 0 0-2.572 1.145-2.572 5.05 0 .236 0 .485-.002.745a77.26 77.26 0 0 0 .013 2.352c.094 3.818.704 7.582 4.252 8.516 1.636.431 3.041.521 4.173.46 2.051-.114 3.203-.729 3.203-.729l-.068-1.481s-1.466.46-3.113.404c-1.63-.056-3.353-.175-3.617-2.168a4.067 4.067 0 0 1-.036-.559s1.601.39 3.63.482c1.242.057 2.405-.072 3.587-.212Zm1.814-2.78H15.46V9.353c0-.968-.41-1.459-1.228-1.459-.904 0-1.358.583-1.358 1.734v2.512h-1.871V9.627c0-1.151-.454-1.734-1.358-1.734-.819 0-1.228.491-1.228 1.459v4.589H6.534V9.213c0-.967.247-1.735.744-2.303.512-.568 1.183-.859 2.015-.859.964 0 1.693.368 2.176 1.105l.469.783.468-.783c.483-.737 1.212-1.105 2.176-1.105.832 0 1.503.291 2.015.86.497.567.744 1.335.744 2.302v4.728Z' />
    </svg>
  );
};
