import '../polyfill';
import { createCell } from 'web-cell';
import { assertLooksLike } from '@tech_query/snabbdom-looks-like';
import { ToggleField as BCToggleField } from 'boot-cell/source/Form/ToggleField';
import { ValidMessage } from 'boot-cell/source/Form/Form';

import { ToggleField } from '../../source/Form/ToggleField';

describe('Toggle Field', () => {
    it("should render a Toggle Field as what BootCell's does", () => {
        assertLooksLike(
            <ToggleField type="checkbox" id="test">
                test
            </ToggleField>,
            <BCToggleField type="checkbox" id="test">
                test
            </BCToggleField>
        );
        assertLooksLike(
            <ToggleField type="radio" id="test">
                test
            </ToggleField>,
            <BCToggleField type="radio" id="test">
                test
            </BCToggleField>
        );
    });

    it('should render a Toggle Field with Material Switch style', () => {
        assertLooksLike(
            <ToggleField type="checkbox" switch id="test">
                test
            </ToggleField>,
            <div className="custom-control custom-switch">
                <input
                    type="checkbox"
                    className="custom-control-input"
                    id="test"
                />
                <span className="custom-control-track" />
                <label className="custom-control-label" for="test">
                    test
                </label>
            </div>
        );
    });

    it('should render a Switch Field with a Validation message', () => {
        assertLooksLike(
            <ToggleField
                type="checkbox"
                switch
                id="test"
                validMode="feedback"
                validMessage="√"
            >
                test
            </ToggleField>,
            <div className="custom-control custom-switch">
                <input
                    type="checkbox"
                    className="custom-control-input"
                    id="test"
                />
                <span className="custom-control-track" />
                <label className="custom-control-label" for="test">
                    test
                </label>
                <ValidMessage validMode="feedback" validMessage="√" />
            </div>
        );
    });
});
