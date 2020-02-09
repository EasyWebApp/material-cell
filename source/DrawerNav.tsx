import {
    VNodeChildElement,
    component,
    mixin,
    watch,
    attribute,
    transitIn,
    transitOut,
    on,
    createCell,
    Fragment
} from 'web-cell';
import { HTMLHyperLinkProps } from 'boot-cell/source/utility/type';
import { Size } from 'boot-cell/source/utility/constant';
import classNames from 'classnames';

import { Icon } from './Icon';

export interface DrawerMenuItem extends HTMLHyperLinkProps {
    icon?: string;
    active?: boolean;
    disabled?: boolean;
    children?: DrawerMenuItem[];
}

export interface DrawerNavProps {
    header?: VNodeChildElement;
    menu?: DrawerMenuItem[];
    direction?: 'left' | 'right';
    open?: boolean;
    permanent?: keyof typeof Size;
    clipped?: boolean;
    float?: boolean;
    persistent?: keyof typeof Size;
    temporary?: keyof typeof Size;
}

@component({
    tagName: 'drawer-nav',
    renderTarget: 'children'
})
export class DrawerNav extends mixin<DrawerNavProps>() {
    @watch
    header = '';

    @watch
    menu = [];

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

        const {
            direction,
            permanent,
            clipped,
            float,
            persistent,
            temporary
        } = this.props;

        const backdrop = !permanent && !persistent && !temporary;

        const Class = classNames(
            'navdrawer',
            backdrop && 'navdrawer-backdrop',
            direction !== 'left' && 'navdrawer-right',
            typeof permanent === 'string' &&
                'navdrawer-permanent' +
                    (permanent === 'xs' ? '' : '-' + permanent),
            clipped && 'navdrawer-permanent-clipped',
            float && 'navdrawer-permanent-float',
            typeof persistent === 'string' &&
                'navdrawer-persistent' +
                    (persistent === 'xs' ? '' : '-' + persistent),
            typeof temporary === 'string' &&
                'navdrawer-temporary' +
                    (temporary === 'xs' ? '' : '-' + temporary)
        );

        if (this.className.trim()) this.className += ' ' + Class;
        else this.className = Class;

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

    renderSubItem = ({
        active,
        disabled,
        href,
        icon,
        title,
        ...rest
    }: DrawerMenuItem) => (
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
                <Icon className="mr-3" name={icon} /> {title}
            </a>
        </li>
    );

    render({ menu, header }: DrawerNavProps) {
        const [tops, subs]: DrawerMenuItem[][] = menu.reduce(
            ([tops, subs], item) => {
                if (item.href) tops.push(item);
                else subs.push(item);

                return [tops, subs];
            },
            [[], []]
        );

        return (
            <div className="navdrawer-content">
                <div className="navdrawer-header">
                    <a className="navbar-brand px-0" target="_top" href=".">
                        {header}
                    </a>
                </div>

                {tops[0] && (
                    <nav className="navdrawer-nav">
                        {tops.map(
                            ({ active, disabled, href, title, ...rest }) => (
                                <a
                                    {...rest}
                                    className={classNames(
                                        'nav-item',
                                        'nav-link',
                                        active && 'active',
                                        disabled && 'disabled'
                                    )}
                                    href={href}
                                >
                                    {title}
                                </a>
                            )
                        )}
                    </nav>
                )}
                {subs.map(({ children = [], title }) => (
                    <Fragment>
                        <div className="navdrawer-divider" />
                        <p className="navdrawer-subheader">{title}</p>

                        {children[0] && (
                            <ul className="navdrawer-nav">
                                {children.map(this.renderSubItem)}
                            </ul>
                        )}
                    </Fragment>
                ))}
            </div>
        );
    }
}
