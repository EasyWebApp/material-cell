import { component, multipleMap } from 'web-cell';

import template from './index.html';

import style from './index.less';

const menu_body = new WeakMap();

@component({ template, style })
export default class CellMenu extends HTMLElement {
    constructor() {
        super()
            .construct()
            .then(() => menu_body.set(this, this.$('main > div > ul')[0]));
    }

    get icon() {
        return this.getAttribute('icon');
    }

    set icon(value) {
        this.setAttribute('icon', value);
    }

    connectedCallback() {
        this.view.icon = this.icon;

        new ResizeObserver(this.resize.bind(this)).observe(menu_body.get(this));

        window.addEventListener('resize', this.resize.bind(this));

        this.on('focus', this.open.bind(this));

        this.on('blur', this.open.bind(this, false));
    }

    slotChangedCallback(assigned) {
        this.$('ul')[0].innerHTML = multipleMap(assigned, node => {
            if (node instanceof HTMLElement)
                return `<li>${node.innerHTML}</li>`;
        }).join('\n');

        this.resize();
    }

    resize() {
        const size = this.open(false),
            button = this.$('main > button')[0];

        var container = button.nextElementSibling;

        const outline = container.firstElementChild.style;

        container = container.style;

        (container.top = button.offsetHeight + 'px'),
        (container.width = outline.width = size.width + 'px'),
        (container.height = outline.height = size.height + 'px');
    }

    open(state = true) {
        const menu = menu_body.get(this);

        const size = {
            width: menu.offsetWidth,
            height: menu.offsetHeight
        };

        menu.style.clip = state
            ? `rect(0, ${size.width}px, ${size.height}px, 0)`
            : `rect(0, ${size.width}px, 0, ${size.height}px)`;

        return size;
    }
}
