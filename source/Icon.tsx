import { WebCellProps, createCell } from 'web-cell';
import classNames from 'classnames';

export interface IconProps extends WebCellProps {
    name: string;
}

export function Icon({ className, name, defaultSlot, ...rest }: IconProps) {
    return (
        <i
            {...rest}
            className={classNames('material-icons', className)}
            aria-hidden="true"
        >
            {name}
        </i>
    );
}
