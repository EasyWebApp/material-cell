import { createCell } from 'web-cell';
import { assertLooksLike } from '@tech_query/snabbdom-looks-like';

import { Spinner } from '../source/Spinner';

describe('Spinner', () => {
    it('should render a Spinner with colors', () => {
        assertLooksLike(
            <Spinner color="dark" />,

            <div className="progress-circular progress-circular-dark">
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
    });
});
