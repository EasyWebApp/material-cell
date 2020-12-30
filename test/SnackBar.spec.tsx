import './polyfill';
import { createCell } from 'web-cell';
import { assertLooksLike } from '@tech_query/snabbdom-looks-like';

import { SnackBar } from '../source/SnackBar';

describe('Snack Bar', () => {
    it('should render a simple Snack Bar with one or multiple lines', () => {
        assertLooksLike(
            <SnackBar>test</SnackBar>,
            <div className="snackbar">
                <div className="snackbar-body">test</div>
            </div>
        );
        assertLooksLike(
            <SnackBar multiple>test</SnackBar>,
            <div className="snackbar snackbar-multi-line">
                <div className="snackbar-body">test</div>
            </div>
        );
    });

    it('should render a Snack Bar on sides', () => {
        assertLooksLike(
            <SnackBar align="left">test</SnackBar>,
            <div className="snackbar snackbar-left">
                <div className="snackbar-body">test</div>
            </div>
        );
    });

    it('should render a Snack Bar with an Action button', () => {
        assertLooksLike(
            <SnackBar actionText="Go">test</SnackBar>,
            <div className="snackbar">
                <div className="snackbar-body">test</div>
                <button type="button" className="snackbar-btn">
                    Go
                </button>
            </div>
        );
    });
});
