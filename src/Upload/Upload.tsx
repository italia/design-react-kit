import classNames from "classnames";
import React, { ElementType, InputHTMLAttributes, ReactNode } from "react";
import { Icon } from "../Icon/Icon";

export interface UploadProps extends InputHTMLAttributes<HTMLInputElement> {
    /** L'id che lega il componente con la label */
    id: string;
    /** Etichetta del per il componente Upload, default 'Upload' */
    label?: string | ReactNode;
    /**
     * Il nome dell'icona da mostrare, default è 'it-upload'. Per una lista completa vedi:
     * <a href="https://italia.github.io/design-react-kit/?path=/story/componenti-icon--lista-icone" target="_blank">Lista icone</a>
     * In caso di un'immagine esterna l'URL da utilizzare.
     **/
    icon?: string;
    /** Utilizzarlo in caso di utilizzo di componenti personalizzati. Il valore di default è 'input' */
    tag?: ElementType;
    /** Classi aggiuntive da usare per il componente Upload */
    className?: string;
    testId?: string;
}

export const Upload = ({ id, className, icon = 'it-upload', label = 'Upload', tag = 'input', testId, ...attributes }: UploadProps) => {
    const
        Tag = tag,
        classes = classNames(className, {
            'upload': true
        }),
        extraAttributes: {
            id?: string;
            type: 'file';
            ['aria-describedby']?: string;
        } = {
            id,
            type: 'file'
        };

    // associate the input field with the help text
    const infoId = id ? `${id}Description` : undefined;
    if (id) {
        extraAttributes['aria-describedby'] = infoId;
    }

    return (
        <>
            <Tag {...attributes} {...extraAttributes} className={classes} data-testid={testId} />
            <label htmlFor={id}>
                <Icon icon={icon} />
                <span>{label}</span>
            </label>
        </>
    )
}