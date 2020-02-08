import { createCell } from 'web-cell';
import { HTMLProps } from 'boot-cell/source/utility/type';
import classNames from 'classnames';

export interface IconProps extends HTMLProps {
    name: string;
}

export function Icon({ className, name }: IconProps) {
    return <i className={classNames('material-icons', className)}>{name}</i>;
}
