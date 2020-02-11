import { component, watch, createCell, Fragment } from 'web-cell';
import { observer } from 'mobx-web-cell';
import { HTMLRouter, History } from 'cell-router/source';

import { NavBar } from 'boot-cell/source/Navigator/NavBar';
import { Button } from 'boot-cell/source/Form/Button';
import { DrawerNav, Icon } from '../../source';
import { PageFrame } from '../component';

import logo from '../image/logo.png';
import routes from '../../document/dist';

import { HomePage } from './Home';

@observer
@component({
    tagName: 'page-router',
    renderTarget: 'children'
})
export class PageRouter extends HTMLRouter {
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
            <Fragment>
                <NavBar
                    background="primary"
                    expand="xs"
                    brand={<img style={{ width: '2.5rem' }} src={logo} />}
                >
                    <Button
                        kind="light"
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
                    menu={[
                        { title: 'WebCell', href: 'https://web-cell.dev/' },
                        {
                            title: 'Components',
                            children: routes.map(
                                ({ paths: [href], meta: { title, icon } }) => ({
                                    href,
                                    title,
                                    icon
                                })
                            )
                        }
                    ]}
                    open={this.drawerOpen}
                    onClose={() => (this.drawerOpen = false)}
                />
                <main className="mt-5 py-3">{super.render()}</main>
            </Fragment>
        );
    }
}
