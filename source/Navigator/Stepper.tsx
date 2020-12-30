import { createCell } from 'web-cell';
import classNames from 'classnames';

import { Icon } from '../Reminder/Icon';

export interface Step {
    title: string;
    icon?: string;
}

export interface StepperProps {
    direction?: 'horiz' | 'vert';
    path: Step[];
    currentIndex: number;
}

export function Stepper({
    direction = 'horiz',
    path,
    currentIndex
}: StepperProps) {
    return (
        <div className={`stepper-${direction}`}>
            {path.map(({ icon, title }, index) => {
                const done = index < currentIndex;
                icon = icon || (done && 'check');

                return (
                    <div
                        className={classNames(
                            'stepper',
                            done ? 'done' : index === currentIndex && 'active'
                        )}
                    >
                        <div className="stepper-icon">
                            {icon ? (
                                <Icon name={icon} />
                            ) : (
                                <span>{++index}</span>
                            )}
                        </div>
                        <span className="stepper-text">{title}</span>
                    </div>
                );
            })}
        </div>
    );
}
