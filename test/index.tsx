import { documentReady, render, createCell } from 'web-cell';
import '@material/mwc-icon';
import '@material/mwc-icon-button';
import '@material/mwc-icon-button-toggle';
import '@material/mwc-button';
import '@material/mwc-fab';
import '@material/mwc-radio';
import '@material/mwc-checkbox';
import '@material/mwc-switch';
import '@material/mwc-formfield';
import '@material/mwc-textfield';
import '@material/mwc-textarea';
import '@material/mwc-list';
import '@material/mwc-select';
import '@material/mwc-menu';
import type { Menu } from '@material/mwc-menu';
import '@material/mwc-slider';
import '@material/mwc-linear-progress';
import '@material/mwc-circular-progress';
import '@material/mwc-circular-progress-four-color';
import '@material/mwc-tab';
import '@material/mwc-tab-bar';
import '@material/mwc-snackbar';
import type { Snackbar } from '@material/mwc-snackbar';
import '@material/mwc-dialog';
import type { Dialog } from '@material/mwc-dialog';
import '@material/mwc-top-app-bar';
import '@material/mwc-top-app-bar-fixed';
import '@material/mwc-drawer';

import type {} from '../source';

import * as list from './list';

document.addEventListener(
    'MDCTopAppBar:nav',
    ({ target }: Event) =>
        ((target as HTMLElement).closest('mwc-drawer').open = true)
);

documentReady.then(() =>
    render(
        <mwc-drawer hasHeader type="modal">
            <span slot="title">Components</span>
            <span slot="subtitle">list</span>
            <mwc-list>
                {Object.entries(list).map(([id, title]) => (
                    <mwc-list-item>
                        <a
                            href={`#${id}`}
                            onClick={({ target }) =>
                                ((target as HTMLElement).closest(
                                    'mwc-drawer'
                                ).open = false)
                            }
                        >
                            {title}
                        </a>
                    </mwc-list-item>
                ))}
            </mwc-list>
            <mwc-top-app-bar-fixed slot="appContent">
                <mwc-icon-button icon="menu" slot="navigationIcon" />
                <div slot="title">Material Web Components</div>
                <a
                    slot="actionItems"
                    id="source-code"
                    title="Source code"
                    href="https://github.com/EasyWebApp/material-cell"
                >
                    <mwc-icon>code</mwc-icon>
                </a>
                <main>
                    <h2 id="icon">Icon</h2>
                    <mwc-icon>code</mwc-icon>
                    <h2 id="icon_button">Icon Button</h2>
                    <mwc-icon-button icon="code" />
                    <h2 id="icon_button_toggle">Icon Button Toggle</h2>
                    <mwc-icon-button-toggle
                        onIcon="star"
                        offIcon="star_border"
                    />
                    <h2 id="button">Button</h2>
                    <mwc-button raised icon="code">
                        test
                    </mwc-button>
                    <h2 id="fab">Fab</h2>
                    <mwc-fab
                        extended
                        icon="shopping_cart"
                        label="Add to cart"
                    />
                    <h2 id="radio">Radio</h2>
                    <mwc-radio name="group" />
                    <mwc-radio name="group" checked />
                    <h2 id="checkbox">Checkbox</h2>
                    <mwc-checkbox indeterminate />
                    <h2 id="switch">Switch</h2>
                    <mwc-switch />
                    <h2 id="form_field">Form Field</h2>
                    <mwc-formfield label="check">
                        <mwc-checkbox />
                    </mwc-formfield>
                    <h2 id="text_field">Text Field</h2>
                    <mwc-textfield
                        type="email"
                        label="Email"
                        icon="alternate_email"
                    />
                    <h2 id="text_area">Text Area</h2>
                    <mwc-textarea label="Detail" required />
                    <h2 id="list">List</h2>
                    <mwc-list activatable multi>
                        <mwc-list-item>Item 0</mwc-list-item>
                        <mwc-list-item selected activated>
                            Item 1
                        </mwc-list-item>
                        <mwc-list-item>Item 2</mwc-list-item>
                        <mwc-list-item selected activated>
                            Item 3
                        </mwc-list-item>
                    </mwc-list>
                    <h2 id="select">Select</h2>
                    <mwc-select outlined label="outlined">
                        <mwc-list-item />
                        <mwc-list-item value="0">Item 0</mwc-list-item>
                        <mwc-list-item value="1">Item 1</mwc-list-item>
                        <mwc-list-item value="2">Item 2</mwc-list-item>
                        <mwc-list-item value="3">Item 3</mwc-list-item>
                    </mwc-select>
                    <h2 id="menu">Menu</h2>
                    <div style={{ position: 'relative' }}>
                        <mwc-button
                            raised
                            onClick={({ target }) =>
                                (((target as HTMLElement)
                                    .nextElementSibling as Menu).open = true)
                            }
                        >
                            Open Menu
                        </mwc-button>
                        <mwc-menu id="menu">
                            <mwc-list-item>Item 0</mwc-list-item>
                            <mwc-list-item>Item 1</mwc-list-item>
                            <mwc-list-item>Item 2</mwc-list-item>
                            <mwc-list-item>Item 3</mwc-list-item>
                        </mwc-menu>
                    </div>
                    <h2 id="slider">Slider</h2>
                    <mwc-slider pin markers step={5} max={50} value={10} />
                    <h2 id="linear_progress">Linear Progress</h2>
                    <mwc-linear-progress indeterminate />
                    <h2 id="circular_progress">Circular Progress</h2>
                    <mwc-circular-progress indeterminate />
                    <h2 id="circular_progress_4_colors">
                        Circular Progress - 4 colors
                    </h2>
                    <mwc-circular-progress-four-color indeterminate />
                    <h2 id="tab_bar">Tab Bar</h2>
                    <mwc-tab-bar>
                        <mwc-tab label="Tab one" icon="accessibility" />
                        <mwc-tab label="Tab two" icon="exit_to_app" />
                        <mwc-tab label="Tab three" icon="camera" />
                    </mwc-tab-bar>
                    <h2 id="snack_bar">Snack Bar</h2>
                    <mwc-button
                        raised
                        onClick={({ target }) =>
                            ((target as HTMLElement)
                                .nextElementSibling as Snackbar).show()
                        }
                    >
                        Show Snackbar
                    </mwc-button>
                    <mwc-snackbar labelText="Can't send photo. Retry in 5 seconds.">
                        <mwc-button slot="action">RETRY</mwc-button>
                    </mwc-snackbar>
                    <h2 id="dialog">Dialog</h2>
                    <mwc-button
                        raised
                        onClick={({ target }) =>
                            (((target as HTMLElement)
                                .nextElementSibling as Dialog).open = true)
                        }
                    >
                        Show Alert
                    </mwc-button>
                    <mwc-dialog>
                        Discard draft?
                        <mwc-button slot="primaryAction" dialogAction="discard">
                            Discard
                        </mwc-button>
                        <mwc-button
                            slot="secondaryAction"
                            dialogAction="cancel"
                        >
                            Cancel
                        </mwc-button>
                    </mwc-dialog>
                </main>
            </mwc-top-app-bar-fixed>
        </mwc-drawer>
    )
);
