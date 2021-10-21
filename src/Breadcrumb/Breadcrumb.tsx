import React, { FC, HTMLAttributes } from 'react';
import { Breadcrumb as BreadcrumbBase } from 'reactstrap';
import classNames from 'classnames';

export interface BreadcrumbProps extends HTMLAttributes<HTMLDivElement> {
    /** Etichetta significativa per descrivere il tipo di navigazione */
    ariaLabel?: string;
    /** Classi aggiuntive da usare per il componente Nav */
    className?: string;
}

export const Breadcrumb: FC<BreadcrumbProps> = ({
    ariaLabel = 'breadcrumb',
    className,
    ...attributes
}) => {
    const classes = classNames(className, 'breadcrumb-container');
    return (
        <BreadcrumbBase
            className={classes}
            aria-label={ariaLabel}
            {...attributes}
        />
    );
};
