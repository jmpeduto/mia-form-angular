import { ValidatorFn } from "@angular/forms";
import { MatFormFieldAppearance } from "@angular/material/form-field";

export class MiaField {

    static TYPE_STRING = 'string';
    static TYPE_STRING_WITH_COLOR = 'string-with-color';
    static TYPE_SELECT = 'select';
    static TYPE_AUTOCOMPLETE = 'autocomplete';
    static TYPE_AUTOCOMPLETE_SERVICE = 'autocomplete-service';
    static TYPE_LIST_STRING = 'list-string';
    static TYPE_LIST_SERVICE = 'list-service';
    static TYPE_SELECT_SERVICE = 'select-service';
    static TYPE_TEXT = 'text';
    static TYPE_DATE = 'date';
    static TYPE_PHOTO = 'photo';
    static TYPE_AVATAR_LIST_SERVICE = 'avatar-list-service';
    static TYPE_CHIPS_AND_SELECT = 'chips-and-select';
    static TYPE_ROW = 'row';
    static TYPE_LABEL = 'label';
    static TYPE_BOX = 'box';
    static TYPE_CITY = 'city';

    key: string = '';
    type: string = '';
    label?: string = '';
    validators?: ValidatorFn[] = [];
    classes?: string = '';
    isDisabled?: boolean = false;
    placeholder?: string = '';
    caption?: string = '';
    appearance?: MatFormFieldAppearance = 'outline';
    extra?: any;
}
