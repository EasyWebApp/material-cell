import { createCell, Fragment, transitOut } from 'web-cell';
import { HTMLHyperLinkProps } from 'boot-cell/source/utility/type';
import classNames from 'classnames';

import { Icon } from './Icon';

export interface ChipProps extends HTMLHyperLinkProps {
    icon?: string;
    image?: string;
    closable?: boolean;
}

function close({ currentTarget }: MouseEvent) {
    transitOut((currentTarget as HTMLElement).parentElement, 'show');
}

export function Chip({
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
            closable && 'show'
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
