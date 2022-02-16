import { ReactElement, createElement } from "react";
import DayPicker, { Modifier } from "react-day-picker";

import { DatePickerContainerProps } from "../typings/DatePickerProps";

import "react-day-picker/lib/style.css";
import "./ui/DatePicker.css";

export function DatePicker(props: DatePickerContainerProps): ReactElement {
    const { value, disableWeekends, disabledDays, disabledDaysKey } = props;

    // change handler
    const onChange = (d: Date): void => value.setValue(d);

    // disabled days
    const disabled: Modifier[] = [];
    if (disableWeekends) {
        disabled.push({ daysOfWeek: [0, 6] });
    }
    if (disabledDaysKey && disabledDays && disabledDays.items) {
        for (const item of disabledDays.items) {
            const date = disabledDaysKey.get(item).value;
            disabled.push(date);
        }
    }

    return <DayPicker selectedDays={value.value} onDayClick={onChange} disabledDays={disabled} />;
}
