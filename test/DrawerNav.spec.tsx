import { createCell } from 'web-cell';
import { assertLooksLike } from '@tech_query/snabbdom-looks-like';
import { NavLink } from 'boot-cell/source/Navigator/Nav';
import {
    DrawerNav,
    DrawerNavProps,
    DrawerMenu,
    DrawerMenuItem
} from '../source/DrawerNav';
import { Icon } from '../source/Icon';

const { render } = DrawerNav.prototype;

function InlineDrawer(props: DrawerNavProps) {
    return render(props);
}

describe('Drawer Nav', () => {
    it('should render a Drawer Nav with Nav Links & Sum Menus', () => {
        assertLooksLike(
            <InlineDrawer header="Test">
                <NavLink href="/top">Top</NavLink>

                <DrawerMenu title="Sub">
                    <DrawerMenuItem icon="test" href="/test" active>
                        First
                    </DrawerMenuItem>
                    <DrawerMenuItem icon="test" href="/test" disabled>
                        Second
                    </DrawerMenuItem>
                </DrawerMenu>
            </InlineDrawer>,

            <div className="navdrawer-content">
                <div className="navdrawer-header">
                    <a className="navbar-brand px-0" target="_top" href=".">
                        Test
                    </a>
                </div>
                <nav className="navdrawer-nav">
                    <NavLink href="/top">Top</NavLink>
                </nav>
                <div className="navdrawer-divider" />
                <p className="navdrawer-subheader">Sub</p>
                <ul className="navdrawer-nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="/test">
                            <Icon className="mr-3" name="test" />
                            First
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="/test">
                            <Icon className="mr-3" name="test" />
                            Second
                        </a>
                    </li>
                </ul>
            </div>
        );
    });
});
