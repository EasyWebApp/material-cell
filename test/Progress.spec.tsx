import { createCell } from 'web-cell';
import { assertLooksLike } from '@tech_query/snabbdom-looks-like';
import {
    Progress as BCProgress,
    ProgressBar
} from 'boot-cell/source/Reminder/Progress';

import { Progress } from '../source/Progress';

describe('Progress', () => {
    it("should render a Progess Bar as what BootCell's does", () => {
        assertLooksLike(<Progress percent={0} />, <BCProgress percent={0} />);

        assertLooksLike(
            <Progress>
                <ProgressBar percent={0} />
            </Progress>,
            <BCProgress>
                <ProgressBar percent={0} />
            </BCProgress>
        );
    });

    it('should render an indeterminate Progress Bar', () => {
        assertLooksLike(
            <Progress indeterminate />,
            <BCProgress>
                <ProgressBar className="progress-bar-indeterminate" />
            </BCProgress>
        );
    });
});
