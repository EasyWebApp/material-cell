import { createCell } from 'web-cell';
import { uniqueID } from 'web-utility/source/data';
import {
    ToggleFieldProps,
    ToggleField as BCToggleField
} from 'boot-cell/source/Form/ToggleField';
import { ValidMessage } from 'boot-cell/source/Form/Form';

export { ToggleFieldProps } from 'boot-cell/source/Form/ToggleField';

export function ToggleField({
    type,
    id = uniqueID(),
    defaultSlot,
    validMode,
    validMessage,
    invalidMessage,
    ...rest
}: ToggleFieldProps) {
    return type === 'checkbox' && rest.switch ? (
        <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id={id} />
            <span class="custom-control-track" />
            <label class="custom-control-label" for={id}>
                {defaultSlot}
            </label>
            <ValidMessage {...{ validMode, validMessage, invalidMessage }} />
        </div>
    ) : (
        <BCToggleField {...rest} type={type} id={id}>
            {defaultSlot}
        </BCToggleField>
    );
}
