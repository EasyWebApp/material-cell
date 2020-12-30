import { VNodeChildElement, VNode, createCell } from 'web-cell';
import { uniqueID } from 'web-utility/source/data';
import {
    InputGroupProps as BCInputGroupProps,
    GroupLabel
} from 'boot-cell/source/Form/InputGroup';
import { isField } from 'boot-cell/source/Form/Field';
import { ValidMessage } from 'boot-cell/source/Form/Form';
import classNames from 'classnames';

import { isFormField } from './FormField';
import { isIcon } from '../Reminder/Icon';
import './InputGroup.less';

export interface InputGroupProps extends BCInputGroupProps {}

export function InputGroup({
    id = uniqueID(),
    defaultSlot,
    size,
    className,
    validMode,
    validMessage,
    invalidMessage,
    ...rest
}: InputGroupProps) {
    var field_id = `${id}-field-0`;

    const [
        fields,
        icons,
        prepends,
        appends
    ] = (defaultSlot as VNodeChildElement[]).reduce(
        ([fields, icons, prepends, appends], node) => {
            if (isField(node) || isFormField(node)) {
                fields.push(node);

                if (fields.length === 1) {
                    if (node.data.props?.id) field_id = node.data.props.id;
                    else
                        (node.data.props = node.data.props || {}).id = field_id;
                }
                (node.data.attrs = node.data.attrs || {})[
                    'aria-describedby'
                ] = `${id}-label-${
                    prepends[0] || icons[0] ? 'prepend' : 'append'
                }-0`;
            } else if (isIcon(node)) icons.push(node);
            else if (fields[0]) appends.push(node);
            else prepends.push(node);

            return [fields, icons, prepends, appends];
        },
        [[], [], [], []] as [
            VNode[],
            VNode[],
            VNodeChildElement[],
            VNodeChildElement[]
        ]
    );
    return (
        <div
            {...rest}
            className={classNames(
                'input-group',
                size && `input-group-${size}`,
                className
            )}
            id={id}
        >
            {prepends[0] && (
                <GroupLabel
                    type="prepend"
                    id={`${id}-label`}
                    htmlFor={field_id}
                    list={prepends}
                />
            )}
            {fields}

            {appends[0] && (
                <GroupLabel
                    type="append"
                    id={`${id}-label`}
                    htmlFor={field_id}
                    list={appends}
                />
            )}
            {icons[0] && (
                <span className="input-group-icon" id={`${id}-label-prepend-0`}>
                    {icons}
                </span>
            )}
            <ValidMessage {...{ validMode, validMessage, invalidMessage }} />
        </div>
    );
}
