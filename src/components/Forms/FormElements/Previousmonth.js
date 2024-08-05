import React, {  useState } from "react";
import DatePicker from "react-datepicker";
export const Previousmonth = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker
        className="form-control"
        selected={startDate}
        showPreviousMonths
        onChange={(date) => setStartDate(date)}
        monthsShown={2}
      />
    );
  };