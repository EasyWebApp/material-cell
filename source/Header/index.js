import { component } from 'web-cell';

import template from './index.html';

const onResize = new WeakMap();

@component({ template })
export default class CellHeader extends HTMLElement {
    constructor() {
        super().construct();
    }

    connectedCallback() {
        const observer = new ResizeObserver(() =>
            this.classList.toggle('big', window.innerWidth > 1024)
        );

        observer.observe(document.body);

        onResize.set(this, observer);
    }

    disconnectedCallback() {
        onResize.get(this).disconnect();
    }
}
