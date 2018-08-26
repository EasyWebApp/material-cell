import { component } from "web-cell";

import template from "./index.html";

const menu_body = new WeakMap();


export default  class CellMenu extends HTMLElement {

    constructor() {

        super().buildDOM( template );

        menu_body.set(this,  this.$('main > div > ul')[0]);
    }

    connectedCallback() {

        this.update();

        this.$('slot')[0].addEventListener(
            'slotchange',  this.update.bind( this )
        );

        window.addEventListener('resize',  this.resize.bind( this ));

        this.on('focus',  this.open.bind( this ));

        this.on('blur',  this.open.bind(this, false));
    }

    update() {

        this.$('ul')[0].innerHTML = [ ].concat(
            ... Array.from(
                this.$('slot')[0].assignedNodes(),  node => node.innerHTML
            ).filter( Boolean )
        ).map(
            HTML => `<li>${HTML}</li>`
        ).join('\n');

        this.resize();
    }

    resize() {

        const rect = this.open( false ),
            button_rect = this.$('main > button')[0].getBoundingClientRect();

        var container = this.$('main > div')[0];

        const outline = container.firstElementChild.style;

        container = container.style;

        container.right = window.innerWidth - button_rect.right + 'px',
        container.top = button_rect.bottom + 'px';

        container.width = outline.width = rect.width + 'px',
        container.height = outline.height = rect.height + 'px';
    }

    open(state = true) {

        const menu = menu_body.get( this );

        const rect = menu.getBoundingClientRect();

        menu.style.clip = state ?
            `rect(0, ${rect.width}px, ${rect.height}px, 0)`  :
            `rect(0, ${rect.width}px, 0, ${rect.height}px)`;

        return rect;
    }
}

component( CellMenu );
