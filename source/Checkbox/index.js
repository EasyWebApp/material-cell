import { component, InputComponent } from 'web-cell';

import template from './index.html';

@component({ template })
export default class CellCheckbox extends InputComponent {
    constructor() {
        super();
    }
}
