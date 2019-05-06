import { component, on } from 'web-cell';

import template from './index.html';

@component({ template })
export default class CellDrawer extends HTMLElement {
    constructor() {
        super().construct();
    }

    open() {
        this.classList.add('focus');
    }

    @on('click', ':host main + div')
    @on('click', 'a[href]')
    close() {
        this.classList.remove('focus');
    }
}
