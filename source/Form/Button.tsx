import { createCell } from 'web-cell';
import {
    ButtonProps as BCButtonProps,
    Button as BCButton
} from 'boot-cell/source/Form/Button';
import classNames from 'classnames';

export interface ButtonProps extends BCButtonProps {
    flat?: boolean;
    float?: boolean;
}

export function Button({
    flat,
    color,
    float,
    className,
    defaultSlot,
    ...rest
}: ButtonProps) {
    return (
        <BCButton
            {...rest}
            className={classNames(
                flat && `btn-flat${color ? '-' + color : ''}`,
                float && 'btn-float',
                className
            )}
            color={flat ? undefined : color}
        >
            {defaultSlot}
        </BCButton>
    );
}
