import { createCell } from 'web-cell';
import { assertLooksLike } from '@tech_query/snabbdom-looks-like';
import { Button } from 'boot-cell/source/Form/Button';

import { CardAction } from '../source/Card';

describe('Card', () => {
    it('should render a simple Card Action bar defaultly', () => {
        assertLooksLike(
            <CardAction>
                <Button>test</Button>
            </CardAction>,
            <div className="card-actions flex-row">
                <Button>test</Button>
            </div>
        );
    });

    it('should render a Card Action bar with vertical buttons', () => {
        assertLooksLike(
            <CardAction direction="column">
                <Button>test</Button>
                <Button>test</Button>
            </CardAction>,
            <div className="card-actions flex-column">
                <Button>test</Button>
                <Button>test</Button>
            </div>
        );
        assertLooksLike(
            <CardAction direction="column" reverse>
                <Button>test</Button>
                <Button>test</Button>
            </CardAction>,
            <div className="card-actions flex-column-reverse">
                <Button>test</Button>
                <Button>test</Button>
            </div>
        );
    });
});
