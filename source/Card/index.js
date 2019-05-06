import { component } from 'web-cell';

import template from './index.html';

@component({ template })
export default class CellCard extends HTMLElement {
    constructor() {
        super().construct();
    }
}
