import { ReactElement, createElement } from "react";
import DayPicker, { Modifier } from "react-day-picker";
import { isSameDay } from "date-fns";

import { DatePickerContainerProps } from "../typings/DatePickerProps";

import "react-day-picker/lib/style.css";
import "./ui/DatePicker.css";

export function DatePicker(props: DatePickerContainerProps): ReactElement {
    const { value, disableWeekends, disabledDays, disabledDaysKey } = props;

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

    // change handler
    const onChange = (date: Date): void => {
        // do not allow disbaled days
        if (disabled.filter(d => d instanceof Date).find(d => isSameDay(d as Date, date))) {
            return;
        }

        // do not allow weekends
        if (disableWeekends) {
            const weekDay = date.getDay();
            if (weekDay === 6 || weekDay === 0) {
                return;
            }
        }

        value.setValue(date);
    };

    return <DayPicker selectedDays={value.value} onDayClick={onChange} disabledDays={disabled} />;
}
