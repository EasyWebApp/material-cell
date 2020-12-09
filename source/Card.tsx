import { createCell, WebCellProps } from 'web-cell';
import classNames from 'classnames';

export interface CardActionProps extends WebCellProps {
    direction?: 'row' | 'column';
    reverse?: boolean;
}

export function CardAction({
    direction = 'row',
    reverse,
    className,
    defaultSlot,
    ...rest
}: CardActionProps) {
    return (
        <div
            {...rest}
            className={classNames(
                'card-actions',
                `flex-${direction}${reverse ? '-reverse' : ''}`,
                className
            )}
        >
            {defaultSlot}
        </div>
    );
}
