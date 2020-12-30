import '../polyfill';
import { createCell } from 'web-cell';
import { assertLooksLike } from '@tech_query/snabbdom-looks-like';
import { Field } from 'boot-cell/source/Form/Field';
import { GroupLabel } from 'boot-cell/source/Form/InputGroup';

import { InputGroup } from '../../source/Form/InputGroup';
import { Icon } from '../../source/Reminder/Icon';

describe('Input Group', () => {
    it("should render an Input Group like what BootCell's does", () => {
        assertLooksLike(
            <InputGroup id="test">
                <Field id="sample" />
                append
            </InputGroup>,
            <div className="input-group" id="test">
                <Field id="sample" aria-describedby="test-label-append-0" />
                <GroupLabel
                    type="append"
                    id="test-label"
                    htmlFor="sample"
                    list={['append']}
                />
            </div>
        );
    });

    it('should render an Input Group with a prepend Icon', () => {
        assertLooksLike(
            <InputGroup id="test">
                <Icon name="heart" />
                <Field id="sample" />
            </InputGroup>,
            <div className="input-group" id="test">
                <Field id="sample" aria-describedby="test-label-prepend-0" />
                <span className="input-group-icon" id="test-label-prepend-0">
                    <Icon name="heart" />
                </span>
            </div>
        );
    });
});
