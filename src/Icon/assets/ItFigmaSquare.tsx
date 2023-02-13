import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const component = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => {
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
        d='M3.567 1.333h16.762a2.286 2.286 0 0 1 2.286 2.286v16.762a2.286 2.286 0 0 1-2.286 2.286H3.567a2.286 2.286 0 0 1-2.286-2.286V3.619a2.286 2.286 0 0 1 2.286-2.286ZM6.5 6.667A3.167 3.167 0 0 1 9.667 3.5H15a3.167 3.167 0 0 1 1.709 5.833 3.167 3.167 0 1 1-3.876 4.976v3.024a3.167 3.167 0 1 1-4.875-2.666A3.164 3.164 0 0 1 6.5 12c0-1.12.581-2.104 1.458-2.667A3.164 3.164 0 0 1 6.5 6.667Zm3.167 3.166h-.004a2.167 2.167 0 0 0 .004 4.334h2.166V9.833H9.667ZM11.833 4.5v4.333h-2.17A2.167 2.167 0 0 1 9.667 4.5h2.166ZM15 8.833h-2.166V4.5H15a2.167 2.167 0 0 1 .004 4.333H15Zm-.004 1a2.167 2.167 0 1 0 .004 0h-.004Zm-7.496 7.5c0-1.196.97-2.166 2.167-2.166h2.166v2.166a2.167 2.167 0 1 1-4.333 0Z'
      />
    </svg>
  );
};
