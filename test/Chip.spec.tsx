import { createCell } from 'web-cell';
import { assertLooksLike } from '@tech_query/snabbdom-looks-like';

import { Chip } from '../source/Chip';
import { Icon } from '../source/Icon';

describe('Chip', () => {
    it('should render a simple Chip button or anchor', () => {
        assertLooksLike(
            <Chip>test</Chip>,
            <button className="chip chip-action">test</button>
        );
        assertLooksLike(
            <Chip href="/test">test</Chip>,
            <a className="chip chip-action" href="/test">
                test
            </a>
        );
    });

    it('should render a Chip with an icon or image', () => {
        assertLooksLike(
            <Chip icon="T">test</Chip>,
            <button className="chip chip-action">
                <i className="chip-icon">T</i>
                test
            </button>
        );
        assertLooksLike(
            <Chip image="/test.png">test</Chip>,
            <button className="chip chip-action">
                <img className="chip-img" src="/test.png" />
                test
            </button>
        );
    });

    it('should render a closable Chip with animation CSS', () => {
        assertLooksLike(
            <Chip closable>test</Chip>,
            <button className="chip chip-action fade show">
                test
                <button type="button" className="close">
                    <Icon name="cancel" />
                </button>
            </button>
        );
    });
});
