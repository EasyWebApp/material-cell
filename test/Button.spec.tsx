import { createCell } from 'web-cell';
import { assertLooksLike } from '@tech_query/snabbdom-looks-like';
import { Button as BCButton } from 'boot-cell/source/Form/Button';

import { Button } from '../source/Button';

describe('Button', () => {
    it('should render a BootCell Button defaultly', () => {
        assertLooksLike(<Button>test</Button>, <BCButton>test</BCButton>);
    });

    it('should render a Flat Button with colors', () => {
        assertLooksLike(
            <Button flat>test</Button>,
            <BCButton className="btn-flat">test</BCButton>
        );
        assertLooksLike(
            <Button flat color="dark">
                test
            </Button>,
            <BCButton className="btn-flat-dark">test</BCButton>
        );
    });

    it('should render a Float Button with colors', () => {
        assertLooksLike(
            <Button float>test</Button>,
            <BCButton className="btn-float">test</BCButton>
        );
        assertLooksLike(
            <Button float color="dark">
                test
            </Button>,
            <BCButton className="btn-float" color="dark">
                test
            </BCButton>
        );
    });
});
