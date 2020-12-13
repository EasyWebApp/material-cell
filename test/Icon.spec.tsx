import { createCell } from 'web-cell';
import { assertLooksLike } from '@tech_query/snabbdom-looks-like';

import { Icon } from '../source/Icon';

describe('Icon', () => {
    it('should render a simple Icon defaultly', () => {
        assertLooksLike(
            <Icon className="more-style" name="test" />,
            <i className="material-icons more-style" aria-hidden="true">
                test
            </i>
        );
    });
});
