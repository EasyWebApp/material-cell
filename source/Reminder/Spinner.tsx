import { createCell, WebCellProps } from 'web-cell';
import classNames from 'classnames';
import { CommonColors } from 'boot-cell/source/utility/constant';

export interface SpinnerProps extends WebCellProps {
    color?: CommonColors;
}

export function Spinner({
    color,
    className,
    defaultSlot,
    ...rest
}: SpinnerProps) {
    return (
        <div
            {...rest}
            className={classNames(
                'progress-circular',
                color && `progress-circular-${color}`,
                className
            )}
        >
            <div className="progress-circular-wrapper">
                <div className="progress-circular-inner">
                    <div className="progress-circular-left">
                        <div className="progress-circular-spinner"></div>
                    </div>
                    <div className="progress-circular-gap"></div>
                    <div className="progress-circular-right">
                        <div className="progress-circular-spinner"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
