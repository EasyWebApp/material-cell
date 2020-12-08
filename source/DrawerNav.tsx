import {
    WebCellProps,
    VNodeChildElement,
    VNode,
    component,
    mixin,
    watch,
    attribute,
    on,
    createCell,
    Fragment
} from 'web-cell';
import { HTMLHyperLinkProps } from 'web-utility/source/DOM-type';
import { transitIn, transitOut } from 'web-utility/source/animation';
import classNames from 'classnames';
import { Size } from 'boot-cell/source/utility/constant';
import { isNavLink } from 'boot-cell/source/Navigator/Nav';

import { Icon } from './Icon';
import './DrawerNav.css';

export interface DrawerMenuItemProps extends WebCellProps, HTMLHyperLinkProps {
    icon?: string;
    active?: boolean;
    disabled?: boolean;
}

export function DrawerMenuItem({
    active,
    disabled,
    href,
    icon,
    defaultSlot,
    ...rest
}: DrawerMenuItemProps) {
    return (
        <li className="nav-item">
            <a
                {...rest}
                className={classNames(
                    'nav-link',
                    active && 'active',
                    disabled && 'disabled'
                )}
                href={href}
            >
                {icon && <Icon className="mr-3" name={icon} />}
                {defaultSlot}
            </a>
        </li>
    );
}

export interface DrawerMenuProps extends WebCellProps {}

export function DrawerMenu({ title, defaultSlot }: DrawerMenuProps) {
    return (
        <Fragment>
            <div className="navdrawer-divider" />
            <p className="navdrawer-subheader">{title}</p>

            {defaultSlot[0] && <ul className="navdrawer-nav">{defaultSlot}</ul>}
        </Fragment>
    );
}

export interface DrawerNavProps extends WebCellProps {
    header?: VNodeChildElement;
    direction?: 'left' | 'right';
    open?: boolean;
    permanent?: keyof typeof Size;
    clipped?: boolean;
    float?: boolean;
    persistent?: keyof typeof Size;
    temporary?: keyof typeof Size;
    onClose?: (event: CustomEvent) => any;
}

@component({
    tagName: 'drawer-nav',
    renderTarget: 'children'
})
export class DrawerNav extends mixin<DrawerNavProps>() {
    @watch
    header = '';

    @attribute
    @watch
    direction = 'left';

    @attribute
    @watch
    permanent: DrawerNavProps['permanent'];

    @attribute
    @watch
    clipped: boolean;

    @attribute
    @watch
    float: boolean;

    @attribute
    @watch
    persistent: DrawerNavProps['persistent'];

    @attribute
    @watch
    temporary: DrawerNavProps['temporary'];

    @attribute
    @watch
    set open(open: boolean) {
        if (open === !!this.props.open) return;

        this.setProps({ open }).then(async () => {
            if (open) {
                this.removeAttribute('aria-hidden');

                await transitIn(this, 'show');

                this.emit('open');
            } else {
                this.setAttribute('aria-hidden', 'true');

                await transitOut(this, 'show');

                this.emit('close');
            }
        });
    }

    connectedCallback() {
        this.tabIndex = -1;
        this.classList.add('navdrawer');

        self.addEventListener('keydown', this.closeByEscape);
        this.addEventListener('click', this.closeByCover);
    }

    disconnectedCallback() {
        self.removeEventListener('keydown', this.closeByEscape);
        this.removeEventListener('click', this.closeByCover);
    }

    closeByEscape = ({ code }: KeyboardEvent) => {
        if (code === 'Escape') this.open = false;
    };

    closeByCover = ({ target }: MouseEvent) => {
        if (this === target) this.open = false;
    };

    @on('click', 'a[href]')
    closeByLink() {
        this.open = false;
    }

    updatedCallback() {
        const { classList } = this,
            {
                direction,
                permanent,
                clipped,
                float,
                persistent,
                temporary
            } = this.props;

        classList.toggle(
            'navdrawer-backdrop',
            !permanent && !persistent && !temporary
        );
        classList.toggle('navdrawer-right', direction !== 'left');
        classList.toggle(
            'navdrawer-permanent' + (permanent === 'xs' ? '' : '-' + permanent),
            typeof permanent === 'string'
        );
        classList.toggle('navdrawer-permanent-clipped', clipped);
        classList.toggle('navdrawer-permanent-float', float);
        classList.toggle(
            'navdrawer-persistent' +
                (persistent === 'xs' ? '' : '-' + persistent),
            typeof persistent === 'string'
        );
        classList.toggle(
            'navdrawer-temporary' + (temporary === 'xs' ? '' : '-' + temporary),
            typeof temporary === 'string'
        );
    }

    render({ defaultSlot, header }: DrawerNavProps) {
        const [tops, subs] = (defaultSlot as VNode[]).reduce(
            ([tops, subs], item) => {
                if (isNavLink(item)) tops.push(item);
                else subs.push(item);

                return [tops, subs];
            },
            [[], []] as VNode[][]
        );

        return (
            <div className="navdrawer-content">
                {header && (
                    <div className="navdrawer-header">
                        <a className="navbar-brand px-0" target="_top" href=".">
                            {header}
                        </a>
                    </div>
                )}
                {tops[0] && <nav className="navdrawer-nav">{tops}</nav>}

                {subs}
            </div>
        );
    }
}
