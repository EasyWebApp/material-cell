import { createCell } from 'web-cell';
import { HTMLProps } from 'web-utility/source/DOM-type';
import classNames from 'classnames';

export interface IconProps extends HTMLProps {
    name: string;
}

export function Icon({ className, name }: IconProps) {
    return <i className={classNames('material-icons', className)}>{name}</i>;
}
