import React, { FC, HTMLAttributes, ElementType } from 'react';
import { Nav, DropdownMenu, DropdownToggle } from 'reactstrap';
import classNames from 'classnames';

export interface MegamenuProps extends HTMLAttributes<HTMLUlistElement> {
}

export const Megamenu: FC<MegamenuProps> = ({
	tag = 'nav',
	...attributes
}) => {
	const Tag = tag;
	return (
		<Tag className='navbar navbar-expand-lg has-megamenu'>
			
		</Tag>
	);
};
