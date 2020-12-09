import { createCell } from 'web-cell';
import {
    ProgressBar,
    ProgressProps as BCProgressProps,
    Progress as BCProgress
} from 'boot-cell/source/Reminder/Progress';

export interface ProgressProps extends BCProgressProps {
    indeterminate?: boolean;
}

export function Progress({
    striped,
    animated,
    status,
    percent,
    label,
    indeterminate,
    defaultSlot,
    ...rest
}: ProgressProps) {
    return (
        <BCProgress {...rest}>
            {!indeterminate && defaultSlot[0] ? (
                defaultSlot
            ) : (
                <ProgressBar
                    className={
                        indeterminate ? 'progress-bar-indeterminate' : undefined
                    }
                    {...{
                        striped,
                        animated,
                        status,
                        percent,
                        label
                    }}
                />
            )}
        </BCProgress>
    );
}
