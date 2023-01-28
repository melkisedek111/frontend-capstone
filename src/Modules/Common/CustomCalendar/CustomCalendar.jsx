import React, { useState } from "react";
import { CustomCalendarContainer } from "./customCalendar.styled.jsx";
import Calendar from "react-calendar";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";
const CustomCalendar = () => {
	const [value, onChange] = useState(new Date());
	function isTileDisabled({activeStartDate, date, view }) {
		return date.getMonth() !== activeStartDate.getMonth();
	}

	return (
		<CustomCalendarContainer>
			<h5>Request Calendar</h5>
			<Calendar
				formatShortWeekday={(locale, date) => {
					const [getWeekDays] = date.toString().split(" ");
					return getWeekDays[0];
				}}
                view="month"
				tileDisabled={isTileDisabled}
				onChange={onChange}
                tileClassName={({ date, view }) => date.getDay() === 0 ? "tile-sunday" : ""}
				value={value}
				prevLabel={<ArrowLeftRoundedIcon />}
				nextLabel={<ArrowRightRoundedIcon />}
				next2Label={null}
				prev2Label={null}
				calendarType="Hebrew"
			/>
		</CustomCalendarContainer>
	);
};

export default CustomCalendar;
