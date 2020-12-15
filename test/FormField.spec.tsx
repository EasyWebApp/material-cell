import { createCell } from 'web-cell';
import { assertLooksLike } from '@tech_query/snabbdom-looks-like';
import { FormField as BCFormField } from 'boot-cell/source/Form/FormField';

import { FormField } from '../source/FormField';

describe('Form Field', () => {
    it("should render a Form Field as what BootCell's does defaultly", () => {
        assertLooksLike(<FormField id="test" />, <BCFormField id="test" />);
    });

    it('should render a Form Field with Box mode', () => {
        assertLooksLike(
            <FormField id="test" boxMode />,
            <BCFormField id="test" className="textfield-box" />
        );
    });
});
