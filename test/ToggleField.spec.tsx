import { createCell } from 'web-cell';
import { assertLooksLike } from '@tech_query/snabbdom-looks-like';
import { ToggleField as BCToggleField } from 'boot-cell/source/Form/ToggleField';

import { ToggleField } from '../source/ToggleField';
import { ValidMessage } from 'boot-cell/source/Form/Form';

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
            <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="test" />
                <span class="custom-control-track" />
                <label class="custom-control-label" for="test">
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
            <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="test" />
                <span class="custom-control-track" />
                <label class="custom-control-label" for="test">
                    test
                </label>
                <ValidMessage validMode="feedback" validMessage="√" />
            </div>
        );
    });
});
