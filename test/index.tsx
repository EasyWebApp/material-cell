import { documentReady, render, createCell, Fragment } from 'web-cell';
import '@material/mwc-icon';
import '@material/mwc-icon-button';
import '@material/mwc-icon-button-toggle';
import '@material/mwc-button';
import '@material/mwc-radio';
import '@material/mwc-checkbox';
import '@material/mwc-circular-progress';
import '@material/mwc-circular-progress-four-color';

import type {} from '../source';

documentReady.then(() =>
    render(
        <>
            <h1>
                <a
                    target="_blank"
                    href="https://github.com/material-components/material-components-web-components"
                >
                    Material Web Components
                </a>{' '}
                with{' '}
                <a target="_blank" href="https://web-cell.dev/">
                    WebCell
                </a>
            </h1>

            <h2>Icon</h2>
            <mwc-icon>code</mwc-icon>

            <h2>Icon Button</h2>
            <mwc-icon-button icon="code"></mwc-icon-button>

            <h2>Icon Button Toggle</h2>
            <mwc-icon-button-toggle
                onIcon="star"
                offIcon="star_border"
            ></mwc-icon-button-toggle>

            <h2>Button</h2>
            <mwc-button raised icon="code">
                test
            </mwc-button>

            <h2>Radio</h2>
            <mwc-radio name="group"></mwc-radio>
            <mwc-radio name="group" checked></mwc-radio>

            <h2>Checkbox</h2>
            <mwc-checkbox indeterminate></mwc-checkbox>

            <h2>Circular Progress</h2>
            <mwc-circular-progress indeterminate></mwc-circular-progress>

            <h2>Circular Progress - 4 colors</h2>
            <mwc-circular-progress-four-color
                indeterminate
            ></mwc-circular-progress-four-color>
        </>
    )
);
