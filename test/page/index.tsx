import { component, watch, mixin, createCell, Fragment } from 'web-cell';
import { History, CellRouter } from 'cell-router/source';

import { NavBar } from 'boot-cell/source/Navigator/NavBar';
import { NavLink } from 'boot-cell/source/Navigator/Nav';
import { Button } from 'boot-cell/source/Form/Button';
import {
    DrawerNav,
    DrawerSubMenu,
    DrawerSubMenuItem
} from '../../source/DrawerNav';
import { Icon } from '../../source/Icon';
import { PageFrame } from '../component';

import logo from '../image/logo.png';
import routes from '../../document/dist';

import { HomePage } from './Home';

@component({
    tagName: 'page-router',
    renderTarget: 'children'
})
export class PageRouter extends mixin() {
    protected history = new History();
    protected routes = [
        { paths: [''], component: HomePage },
        ...routes.map(({ paths, component, meta: { title, description } }) => ({
            paths,
            component: async () => {
                const Content = await component();

                return () => (
                    <PageFrame title={title} description={description}>
                        <Content />
                    </PageFrame>
                );
            }
        }))
    ];

    @watch
    drawerOpen = false;

    render() {
        return (
            <>
                <NavBar
                    background="primary"
                    expand="xs"
                    brand={<img style={{ width: '2.5rem' }} src={logo} />}
                >
                    <Button
                        color="light"
                        outline
                        onClick={() => (this.drawerOpen = true)}
                    >
                        <Icon name="menu" />
                    </Button>
                </NavBar>

                <DrawerNav
                    permanent="md"
                    clipped
                    header="Material Cell"
                    open={this.drawerOpen}
                    onClose={() => (this.drawerOpen = false)}
                >
                    <NavLink href="https://web-cell.dev/">WebCell</NavLink>

                    <DrawerSubMenu title="Components">
                        {routes.map(
                            ({ paths: [href], meta: { title, icon } }) => (
                                <DrawerSubMenuItem href={href} icon={icon}>
                                    {title}
                                </DrawerSubMenuItem>
                            )
                        )}
                    </DrawerSubMenu>
                </DrawerNav>

                <CellRouter history={this.history} routes={this.routes} />
            </>
        );
    }
}
