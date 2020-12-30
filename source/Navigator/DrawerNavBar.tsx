import {
    component,
    mixin,
    watch,
    attribute,
    createCell,
    Fragment
} from 'web-cell';
import { NavBarProps, NavBar } from 'boot-cell/source/Navigator/NavBar/NavBar';

import { Button } from '../Form/Button';
import { Icon } from '../Reminder/Icon';
import { DrawerNavProps, DrawerNav } from './DrawerNav';
import './DrawerNavBar.less';

export interface DrawerNavBarProps extends NavBarProps, DrawerNavProps {}

@component({
    tagName: 'drawer-navbar',
    renderTarget: 'children'
})
export class DrawerNavBar extends mixin<DrawerNavBarProps>() {
    @attribute
    @watch
    theme?: NavBarProps['theme'];

    @attribute
    @watch
    background?: NavBarProps['background'] = 'primary';

    @attribute
    @watch
    brand = document.title;

    @watch
    header?: DrawerNavProps['header'];

    @attribute
    @watch
    permanent?: DrawerNavProps['permanent'];

    @attribute
    @watch
    clipped?: DrawerNavProps['clipped'];

    @attribute
    @watch
    float?: DrawerNavProps['float'];

    @attribute
    @watch
    persistent: DrawerNavProps['persistent'];

    @attribute
    @watch
    temporary: DrawerNavProps['temporary'];

    @attribute
    @watch
    open = false;

    render({
        theme,
        background,
        brand,
        permanent,
        open,
        defaultSlot,
        ...rest
    }: DrawerNavBarProps) {
        return (
            <>
                <NavBar
                    className="navbar-full"
                    expand="xs"
                    {...{ theme, background, brand }}
                >
                    {permanent ? null : (
                        <Button
                            color="light"
                            outline
                            onClick={() => (this.open = !open)}
                        >
                            <Icon name="menu" />
                        </Button>
                    )}
                </NavBar>

                <DrawerNav
                    {...{ ...rest, permanent, open }}
                    onClose={() => (this.open = false)}
                >
                    {defaultSlot}
                </DrawerNav>
            </>
        );
    }
}
