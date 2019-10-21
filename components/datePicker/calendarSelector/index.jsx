import { h } from "preact"

import { connect } from "react-redux"

import "./calendar-selector.styl"

const mapStateToProps = (store, ownProps) => {
	return {
		store: {
			event: {
				day: {
					date: store.event.day.date
				}
			}
		},
		props: ownProps
	}
}

const mapDispatchToProps = dispatch => {
	return {
		dispatch: {
			updateCreateDate: ({
				event: event,
				day: day,
				month: month,
				year: year
			}) => {
				event.preventDefault()
				return dispatch({
					type: "UPDATE_EVENT_DAY",
					payload: {
						date: day,
						month: month,
						year: year
					}
				})
			}
		}
	}
}

let CalendarSelector = ({ dispatch, store, props }) => {
	let date = store.event.day.date
	let { updateCreateDate } = dispatch
	let { value } = props

	return (
		<button
			className={`calendar-selector ${
				value.getDate() === date ? "active" : ""
			}`}
			onClick={event =>
				updateCreateDate({
					event: event,
					day: value.getDate(),
					month: value.getMonth() + 1,
					year: value.getFullYear()
				})
			}
		>
			{value.getDate()}
		</button>
	)
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CalendarSelector)
