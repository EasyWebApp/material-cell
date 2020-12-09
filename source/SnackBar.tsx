import { WebCellProps, render, createCell } from 'web-cell';
import classNames from 'classnames';
import { makeDefer } from 'iterable-observer/source/utility';
import { transitOut } from 'web-utility/source/animation';

import style from './SnackBar.less';

export interface SnackBarProps extends WebCellProps {
    multiple?: boolean;
    align?: 'left' | 'center' | 'right';
    open?: boolean;
    actionText?: string;
    action?: WebCellProps['onClick'];
}

export function SnackBar({
    multiple,
    align = 'center',
    open,
    className,
    defaultSlot,
    actionText,
    action,
    ...rest
}: SnackBarProps) {
    return (
        <div
            className={classNames(
                'snackbar',
                multiple && 'snackbar-multi-line',
                align !== 'center' && `snackbar-${align}`,
                open && 'show',
                className
            )}
            {...rest}
        >
            <div className="snackbar-body">{defaultSlot}</div>
            {actionText && (
                <button type="button" className="snackbar-btn" onClick={action}>
                    {actionText}
                </button>
            )}
        </div>
    );
}

interface SnackBarOptions
    extends Pick<SnackBarProps, 'multiple' | 'align' | 'actionText'> {
    content: WebCellProps['defaultSlot'];
    timeout?: number;
}

export async function openSnackBar({
    content,
    timeout = 5000,
    ...rest
}: SnackBarOptions) {
    const defer = makeDefer<boolean>(),
        box = document.body.appendChild(document.createElement('div'));
    box.className = style.box;
    box.onclick = () => defer.resolve(false);

    render(
        <SnackBar
            ref={(bar: HTMLElement) => {
                requestAnimationFrame(() => bar.classList.add('show'));

                if (timeout) setTimeout(() => defer.resolve(false), timeout);
            }}
            action={() => defer.resolve(true)}
            {...rest}
        >
            {content}
        </SnackBar>,
        box
    );

    const flag = await defer.promise;

    await transitOut(box.firstElementChild as HTMLElement, 'show');
    box.remove();

    return flag;
}
