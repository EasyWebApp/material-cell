import { DOMRenderer } from 'dom-renderer';
import { documentReady } from 'web-utility';

import '@material/web/all';
import { MdDialog } from '@material/web/all';

import * as list from './list';

document.addEventListener(
    'MDCTopAppBar:nav',
    ({ target }: Event) =>
        ((target as HTMLElement).closest('md-drawer').open = true)
);

documentReady.then(() =>
    new DOMRenderer().render(
        <md-drawer hasHeader type="modal">
            <span slot="title">Components</span>
            <span slot="subtitle">list</span>
            <md-list>
                {Object.entries(list).map(([id, title]) => (
                    <md-list-item>
                        <a
                            href={`#${id}`}
                            onClick={({ target }) =>
                                ((target as HTMLElement).closest(
                                    'md-drawer'
                                ).open = false)
                            }
                        >
                            {title}
                        </a>
                    </md-list-item>
                ))}
            </md-list>
            <md-top-app-bar-fixed slot="appContent">
                <md-icon-button slot="navigationIcon">
                    <md-icon>menu</md-icon>
                </md-icon-button>
                <div slot="title">Material Web Components</div>
                <a
                    slot="actionItems"
                    id="source-code"
                    title="Source code"
                    href="https://github.com/EasyWebApp/material-cell"
                >
                    <md-icon>code</md-icon>
                </a>
                <main>
                    <h2 id="icon">Icon</h2>
                    <md-icon>code</md-icon>
                    <h2 id="icon_button">Icon Button</h2>
                    <md-icon-button>
                        <md-icon>code</md-icon>
                    </md-icon-button>
                    <h2 id="icon_button_toggle">Icon Button Toggle</h2>
                    <md-icon-button toggle>
                        <md-icon>star</md-icon>
                        <md-icon slot="selected">star_border</md-icon>
                    </md-icon-button>
                    <h2 id="button">Button</h2>
                    <md-filled-button>
                        <md-icon slot="icon">code</md-icon>
                        test
                    </md-filled-button>
                    <h2 id="fab">Fab</h2>
                    <md-fab label="Add to cart">
                        <md-icon slot="icon">shopping_cart</md-icon>
                    </md-fab>
                    <h2 id="radio">Radio</h2>
                    <md-radio name="group" />
                    <md-radio name="group" checked />
                    <h2 id="checkbox">Checkbox</h2>
                    <md-checkbox indeterminate />
                    <h2 id="switch">Switch</h2>
                    <md-switch />
                    <h2 id="form_field">Form Field</h2>
                    <label>
                        <md-checkbox />
                        check
                    </label>
                    <h2 id="text_field">Text Field</h2>
                    <md-filled-text-field type="email" label="Email">
                        <md-icon slot="leading-icon">alternate_email</md-icon>
                    </md-filled-text-field>
                    <h2 id="text_area">Text Area</h2>
                    <md-filled-text-field
                        type="textarea"
                        label="Detail"
                        required
                    />
                    <h2 id="list">List</h2>
                    <md-list>
                        <md-list-item>Item 0</md-list-item>
                        <md-list-item>Item 1</md-list-item>
                        <md-list-item>Item 2</md-list-item>
                        <md-list-item>Item 3</md-list-item>
                    </md-list>
                    <h2 id="select">Select</h2>
                    <md-outlined-select label="outlined">
                        <md-select-option />
                        <md-select-option value="0">Item 0</md-select-option>
                        <md-select-option value="1">Item 1</md-select-option>
                        <md-select-option value="2">Item 2</md-select-option>
                        <md-select-option value="3">Item 3</md-select-option>
                    </md-outlined-select>
                    <h2 id="menu">Menu</h2>
                    <div style={{ position: 'relative' }}>
                        <md-filled-button id="menu-trigger">
                            Open Menu
                        </md-filled-button>
                        <md-menu id="menu" anchor="menu-trigger">
                            <md-menu-item>
                                <div slot="headline">Item 0</div>
                            </md-menu-item>
                            <md-menu-item>
                                <div slot="headline">Item 1</div>
                            </md-menu-item>
                            <md-menu-item>
                                <div slot="headline">Item 2</div>
                            </md-menu-item>
                            <md-menu-item>
                                <div slot="headline">Item 3</div>
                            </md-menu-item>
                        </md-menu>
                    </div>
                    <h2 id="slider">Slider</h2>
                    <md-slider ticks step={5} max={50} value={10} />
                    <h2 id="linear_progress">Linear Progress</h2>
                    <md-linear-progress indeterminate />
                    <h2 id="circular_progress">Circular Progress</h2>
                    <md-circular-progress indeterminate />
                    <h2 id="circular_progress_4_colors">
                        Circular Progress - 4 colors
                    </h2>
                    <md-circular-progress indeterminate />
                    <h2 id="tab_bar">Tab Bar</h2>
                    <md-tabs>
                        <md-primary-tab>
                            <md-icon slot="icon">accessibility</md-icon>Tab one
                        </md-primary-tab>
                        <md-primary-tab>
                            <md-icon slot="icon">exit_to_app</md-icon>Tab two
                        </md-primary-tab>
                        <md-primary-tab>
                            <md-icon slot="icon">camera</md-icon>Tab three
                        </md-primary-tab>
                    </md-tabs>
                    <h2 id="snack_bar">Snack Bar</h2>
                    <md-filled-button
                        onClick={({ target }) =>
                            (
                                (target as HTMLElement)
                                    .nextElementSibling as Snackbar
                            ).show()
                        }
                    >
                        Show Snackbar
                    </md-filled-button>
                    <md-snackbar labelText="Can't send photo. Retry in 5 seconds.">
                        <md-filled-button slot="action">RETRY</md-filled-button>
                    </md-snackbar>
                    <h2 id="dialog">Dialog</h2>
                    <md-filled-button
                        onClick={({ target }) =>
                            (
                                (target as HTMLElement)
                                    .nextElementSibling as MdDialog
                            ).show()
                        }
                    >
                        Show Alert
                    </md-filled-button>
                    <md-dialog>
                        <div slot="headline">Discard draft?</div>
                        {/* @ts-ignore */}
                        <form slot="content" id="form-id" method="dialog" />
                        <div slot="actions">
                            <md-text-button value="discard">
                                Discard
                            </md-text-button>
                            <md-text-button value="cancel">
                                Cancel
                            </md-text-button>
                        </div>
                    </md-dialog>
                </main>
            </md-top-app-bar-fixed>
        </md-drawer>
    )
);
