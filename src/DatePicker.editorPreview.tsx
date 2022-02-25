import { ReactElement, createElement } from "react";
const DayPickerInput = require("react-day-picker/DayPickerInput").default;

export function preview(): ReactElement {
    return <DayPickerInput />;
}

export function getPreviewCss(): string {
    return require("./ui/DatePicker.css");
}
