import {
    VNodeChildElement,
    component,
    mixin,
    watch,
    attribute,
    transitIn,
    transitOut,
    createCell,
    Fragment
} from 'web-cell';
import classNames from 'classnames';

export interface DrawerMenuItem {
    title: string;
    href?: string;
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
    set open(open: boolean) {
        this.setProps({ open }).then(() =>
            open ? transitIn(this, 'show') : transitOut(this, 'show')
        );
    }

    connectedCallback() {
        this.tabIndex = -1;

        this.classList.add(
            'navdrawer',
            this.props.direction === 'left' ? '' : 'navdrawer-right'
        );

        this.setAttribute('aria-hidden', 'true');
    }

    renderSubItem = ({
        active,
        disabled,
        href,
        icon,
        title
    }: DrawerMenuItem) => (
        <li className="nav-item">
            <a
                className={classNames(
                    'nav-link',
                    active && 'active',
                    disabled && 'disabled'
                )}
                href={href}
            >
                <i className="material-icons mr-3">{icon}</i> {title}
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
                    <a className="navbar-brand px-0" href=".">
                        {header}
                    </a>
                </div>

                {tops[0] && (
                    <nav className="navdrawer-nav">
                        {tops.map(({ active, disabled, href, title }) => (
                            <a
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
                        ))}
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
