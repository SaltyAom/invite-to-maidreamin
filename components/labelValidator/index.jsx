import { h, Fragment } from "preact"
import { useState, useEffect, useRef } from "preact/hooks"

import { connect } from "react-redux"

const mapStateToProps = (store, ownProps) => {
	return {
		props: ownProps
	}
}

const mapDispatchToProps = dispatch => {
	return {
		dispatch: {
			updateEventTitle: title =>
				dispatch({
					type: "UPDATE_EVENT_TITLE",
					payload: {
						title: title
					}
				}),
			updateEventTime: time =>
				dispatch({
					type: "UPDATE_EVENT_TIME",
					payload: {
						time: time
					}
				})
		}
	}
}

import "./label-checker.styl"

const LabelValidator = ({ props, dispatch }) => {
	let { updateEventTime, updateEventTitle } = dispatch

	let { children, options, value } = props
	let {
		type = "text",
		minLength = 5,
		maxLength = 30,
		successText = "Looking great!",
		minTime = "10:00",
		maxTime = "21:00"
	} = options

	let [checkState, setCheckState] = useState(undefined),
		[checkDetail, setCheckDetail] = useState("")

	let updateValue = useRef(value)

	useEffect(() => {
		let deferValue = value
		updateValue.current = deferValue

		if (type === "text") {
			setTimeout(() => {
				if (updateValue.current !== deferValue) return
				if (typeof updateValue.current === "undefined") return

				if (updateValue.current === "") return resetCheckState()
				if (updateValue.current.length < minLength)
					return updateCheckState(
						`Title is too short, atleast 5 characters.`
					)
				if (updateValue.current.length > maxLength)
					return updateCheckState(`Please use a shorter title.`)
				if (typeof updateValue.current.toString() !== "string")
					return updateCheckState("Make sure title is a text.")

				updateCheckState("", true)
				updateEventTitle(updateValue.current.toString())
			}, 350)
		}

		if (type === "time") {
			if (updateValue.current !== deferValue) return
			if (typeof updateValue.current === "undefined") return

			let hour = updateValue.current.split(":")[0],
				minute = updateValue.current.split(":")[1]

			let minHour = minTime.split(":")[0],
				minMinute = minTime.split(":")[1]

			let maxHour = maxTime.split(":")[0],
				maxMinute = maxTime.split(":")[1]

			if (value === "") return resetCheckState()

			if (maxHour < hour)
				return updateCheckState("Too late, close at 21:00 PM")

			if (maxHour <= hour && maxMinute < minute)
				return updateCheckState("Too late, close at 21:00 PM")

			if (minHour > hour)
				return updateCheckState("Too early, open at 10:00 AM")

			if (minHour >= hour && minMinute > minute)
				return updateCheckState("Please early, open at 10:00 AM")

			updateCheckState("", true)
			updateEventTime(updateValue.current)
		}
	}, [value])

	const updateCheckState = (detail, value = false) => {
		setCheckDetail(detail)
		setCheckState(value)
	}

	const resetCheckState = () => {
		setCheckDetail("")
		setCheckState(undefined)
	}

	if (checkState === undefined)
		return <label className="input-detail">{children}</label>

	if (checkState === true)
		return (
			<Fragment>
				<label className="input-detail success">{successText}</label>
			</Fragment>
		)

	return <label className="input-detail danger">{checkDetail}</label>
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LabelValidator)
