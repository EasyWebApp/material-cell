import { createCell } from 'web-cell';
import { assertLooksLike } from '@tech_query/snabbdom-looks-like';

import { Stepper } from '../../source/Navigator/Stepper';
import { Icon } from '../../source/Reminder/Icon';

describe('Stepper', () => {
    it('should render a Step list with Serial numbers defaultly', () => {
        assertLooksLike(
            <Stepper
                path={[{ title: 'One' }, { title: 'Two' }]}
                currentIndex={0}
            />,
            <div className="stepper-horiz">
                <div className="stepper active">
                    <div className="stepper-icon">
                        <span>{1}</span>
                    </div>
                    <span className="stepper-text">One</span>
                </div>
                <div className="stepper">
                    <div className="stepper-icon">
                        <span>{2}</span>
                    </div>
                    <span className="stepper-text">Two</span>
                </div>
            </div>
        );
    });

    it('should render a Step list with Icons', () => {
        assertLooksLike(
            <Stepper
                direction="vert"
                path={[
                    { title: 'One', icon: 'test' },
                    { title: 'Two', icon: 'test' }
                ]}
                currentIndex={1}
            />,
            <div className="stepper-vert">
                <div className="stepper done">
                    <div className="stepper-icon">
                        <Icon name="test" />
                    </div>
                    <span className="stepper-text">One</span>
                </div>
                <div className="stepper active">
                    <div className="stepper-icon">
                        <Icon name="test" />
                    </div>
                    <span className="stepper-text">Two</span>
                </div>
            </div>
        );
    });
});
