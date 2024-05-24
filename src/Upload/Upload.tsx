import classNames from "classnames";
import React, { ElementType, InputHTMLAttributes, ReactNode } from "react";
import { Icon, IconProps } from "../Icon/Icon";

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
    iconSize?: IconProps["size"];
    /** Utilizzarlo in caso di utilizzo di componenti personalizzati. Il valore di default è 'input' */
    tag?: ElementType;
    /** Classi aggiuntive da usare per il componente Upload */
    className?: string;
    /** Indica che il formato è con un avatar */
    isAvatar?: boolean;
    testId?: string;
}

export const Upload = ({ id, className, icon = 'it-upload', iconSize, label = 'Upload', tag = 'input', isAvatar, testId, ...attributes }: UploadProps) => {
    const
        Tag = tag,
        classes = classNames(className, {
            'upload': true
        }, { 'upload-avatar': isAvatar }),
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

    if (isAvatar) {
        return (
            <div className="avatar-upload-wrapper">
                <div className="avatar size-xxl avatar-upload">
                    <img src="https://randomuser.me/api/portraits/men/21.jpg" alt="descrizione immagine" />
                    <form className="upload-avatar-container" method="post" action="" >
                        <Upload id="upload3" icon="it-camera" iconSize="sm" className="upload-avatar" />
                    </form>
                </div>
                <div className="avatar-upload-icon">
                    <svg className="icon icon-sm" aria-hidden="true"><use href="/bootstrap-italia/dist/svg/sprites.svg#it-camera"></use></svg>
                </div>
            </div>
        )
    }

    return (
        <>
            <Tag {...attributes} {...extraAttributes} className={classes} data-testid={testId} />
            <label htmlFor={id}>
                <Icon icon={icon} size={iconSize} />
                <span>{label}</span>
            </label>
        </>
    )
}