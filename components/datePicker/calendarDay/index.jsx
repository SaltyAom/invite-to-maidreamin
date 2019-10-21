import { h, Fragment } from "preact"
import { useState, useEffect } from "preact/hooks"

import "./calendar-day.styl"

const CalendarDay = ({ startFrom = false }) => {
	if (startFrom) {
		let [dayInWeek, setDayInWeek] = useState([])

		useEffect(() => {
			let currentDate = new Date(),
				currentMonth = currentDate.getMonth() + 1,
				currentYear = currentDate.getFullYear()

			let determineDay = date => {
				switch (date) {
					case 0:
						return "Sun"
					case 1:
						return "Mon"
					case 2:
						return "Tue"
					case 3:
						return "Wed"
					case 4:
						return "Thr"
					case 5:
						return "Fri"
					case 6:
						return "Sat"
					default:
						return "Sun"
				}
			}

			let dayInWeekData = []
            for (let iterateDay = -1; iterateDay <= 4; iterateDay++) {
				let dayData = new Date(
					`${currentMonth}-${startFrom.getDate() +
						iterateDay}-${currentYear}`
				)
				dayInWeekData.push(determineDay(dayData.getDay()))
			}
			setDayInWeek(dayInWeekData)
		}, [])

		return (
			<Fragment>
				{dayInWeek.map((day, index) => (
					<p className="calendar-day">{day}</p>
				))}
                <div></div>
			</Fragment>
		)
	}

	return (
		<Fragment>
			<p className="calendar-day">Sun</p>
			<p className="calendar-day">Mon</p>
			<p className="calendar-day">Tue</p>
			<p className="calendar-day">Wed</p>
			<p className="calendar-day">Thr</p>
			<p className="calendar-day">Fri</p>
			<p className="calendar-day">Sat</p>
		</Fragment>
	)
}

export default CalendarDay
