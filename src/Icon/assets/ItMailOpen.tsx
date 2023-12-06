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
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        clipRule='evenodd'
        d='M21 19.858V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.142l9-5.4 9 5.4Zm0-1.166v-7.759l-6.466 3.88L21 18.692Zm0-8.925v-1.53a1 1 0 0 0-.553-.895l-8-4a1 1 0 0 0-.894 0l-8 4A1 1 0 0 0 3 8.236v1.53l7.437 4.463L12 13.292l1.562.937L21 9.767ZM3 10.933v7.759l6.466-3.88L3 10.934ZM2 8.236a2 2 0 0 1 1.106-1.789l8-4a2 2 0 0 1 1.788 0l8 4A2 2 0 0 1 22 8.237V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.236Z'
      />
    </svg>
  );
};
