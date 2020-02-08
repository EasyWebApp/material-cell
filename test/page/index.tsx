import { component, watch, createCell, Fragment } from 'web-cell';
import { observer } from 'mobx-web-cell';
import { HTMLRouter, History } from 'cell-router/source';

import { NavBar } from 'boot-cell/source/Navigator/NavBar';
import { Button } from 'boot-cell/source/Form/Button';
import { DrawerNav, Icon } from '../../source';

import children from '../index.json';

@observer
@component({
    tagName: 'page-router',
    renderTarget: 'children'
})
export class PageRouter extends HTMLRouter {
    protected history = new History();
    protected routes = [];

    @watch
    drawerOpen = false;

    render() {
        return (
            <Fragment>
                <NavBar>
                    <Button
                        kind="light"
                        outline
                        onClick={() => (this.drawerOpen = true)}
                    >
                        <Icon name="menu" />
                    </Button>
                </NavBar>

                <DrawerNav
                    direction="right"
                    header="Material Cell"
                    menu={[
                        { title: 'WebCell', href: 'https://web-cell.dev/' },
                        { title: 'Subs', children }
                    ]}
                    open={this.drawerOpen}
                    onClose={() => (this.drawerOpen = false)}
                />
            </Fragment>
        );
    }
}
