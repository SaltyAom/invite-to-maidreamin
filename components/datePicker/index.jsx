import { h, Fragment } from "preact"
import { useState, useEffect } from "preact/hooks"

import CalendarSelector from "./calendarSelector"
import CalendarIndent from "./calendarIndent"
import CalendarDay from "./calendarDay"

import "./input-calendar.styl"

const datePicker = () => {
	let [isExpand, setIsExpand] = useState(false),
		[dayInMonth, setdayInMonth] = useState([]),
		[monthStartDay, setMonthStartDay] = useState(0)

	let today = new Date()

	let nextDay = () => {
		let tomorrow = new Date(today.setDate(today.getDate() + 1))
		return tomorrow
	}

	useEffect(() => {
		let currentDate = new Date(),
			currentMonth = currentDate.getMonth() + 1,
			currentYear = currentDate.getFullYear(),
			dateFromStart = new Date(
				`${currentMonth}-${1}-${currentYear}`
			).getDate()

		let dayInMonthData = []

		for (let iterateDay = dateFromStart; iterateDay <= 31; iterateDay++) {
			let dayData = new Date(
				`${currentMonth}-${iterateDay}-${currentYear}`
			)
			if (dayData.getMonth() + 1 === currentMonth)
				dayInMonthData.push(dayData)
		}

		setMonthStartDay(new Date(`${currentMonth}-1-${currentYear}`).getDay())
		setdayInMonth(dayInMonthData)
	}, [])

	const setIsExpandHandler = (event, value = !isExpand) => {
		event.preventDefault()

		setIsExpand(value)
	}

	return (
		<Fragment>
			{isExpand ? (
				<Fragment>
					<div className="calendar">
						<CalendarDay />
						<CalendarIndent indent={monthStartDay} />
						{dayInMonth.map((day, index) => (
							<CalendarSelector key={index} value={day} />
						))}
					</div>
					<div className="calendar-footer">
						<button
							className="calendar-to-less"
							onClick={() => setIsExpandHandler(event, false)}
						>
							<i className="material-icons">expand_less</i>
							Lesser detail
						</button>
					</div>
				</Fragment>
			) : (
				<div className="calendar">
					<CalendarDay startFrom={new Date()} />
					<CalendarSelector value={new Date()} />
					<CalendarSelector value={nextDay()} />
					<CalendarSelector value={nextDay()} />
					<CalendarSelector value={nextDay()} />
					<CalendarSelector value={nextDay()} />
					<CalendarSelector value={nextDay()} />
					<button
						className="calendar-option"
						onClick={() => setIsExpandHandler(event, true)}
					>
						<i className="material-icons">expand_more</i>
					</button>
				</div>
			)}
		</Fragment>
	)
}

export default datePicker