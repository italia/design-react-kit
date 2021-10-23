import React, { FC, HTMLAttributes } from 'react';
import { Breadcrumb as BreadcrumbBase } from 'reactstrap';
import classNames from 'classnames';

export interface BreadcrumbProps extends HTMLAttributes<HTMLDivElement> {
    /** Indica se si vuole la versione con fondo scuro */
    dark?: boolean;
    /** Etichetta significativa per descrivere il tipo di navigazione */
    ariaLabel?: string;
    /** Classi aggiuntive da usare per il componente Nav */
    className?: string;
}

export const Breadcrumb: FC<BreadcrumbProps> = ({
    dark,
    ariaLabel = 'breadcrumb',
    className,
    ...attributes
}) => {
    const classes = classNames(className, 'breadcrumb-container');
    const listClasses = dark ? 'dark':'';
    return (
        <BreadcrumbBase
            className={classes}
            listClassName={listClasses}
            aria-label={ariaLabel}
            {...attributes}
        />
    );
};
