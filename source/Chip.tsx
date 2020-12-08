import { WebCellElement, createCell, Fragment } from 'web-cell';
import { HTMLHyperLinkProps } from 'web-utility/source/DOM-type';
import { transitOut } from 'web-utility/source/animation';
import classNames from 'classnames';

import { Icon } from './Icon';

export interface ChipProps extends HTMLHyperLinkProps {
    icon?: WebCellElement;
    image?: string;
    closable?: boolean;
}

function close({ currentTarget }: MouseEvent) {
    transitOut((currentTarget as HTMLElement).parentElement, 'show');
}

export function Chip({
    className,
    icon,
    image,
    defaultSlot,
    closable,
    href,
    ...rest
}: ChipProps) {
    const Class = classNames(
            'chip',
            'chip-action',
            closable && 'fade',
            closable && 'show',
            className
        ),
        content = (
            <Fragment>
                {icon && <i className="chip-icon">{icon}</i>}
                {image && <img className="chip-img" src={image} />}

                {defaultSlot}

                {closable && (
                    <button type="button" className="close" onClick={close}>
                        <Icon name="cancel" />
                    </button>
                )}
            </Fragment>
        );

    return href ? (
        <a {...rest} className={Class} href={href}>
            {content}
        </a>
    ) : (
        <button {...rest} className={Class}>
            {content}
        </button>
    );
}
