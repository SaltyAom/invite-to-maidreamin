import { h, Fragment } from "preact"
import { useState } from "preact/hooks"

import { connect } from 'react-redux'

import LabelValidator from "components/labelValidator"

const mapStateToProps = (store) => {
	return {
		store: {
			event: {
				day: {
					time: store.event.day.time
				}
			}
		}
	}
}

const mapDispatchToProps = null

import "./time-picker.styl"

const TimePicker = ({ store }) => {
	let timeInStore = store.event.day.time

    let [time, setTime] = useState(timeInStore)

	return (
		<Fragment>
			<input
				className="input input-time"
				type="time"
				min="10:00"
				max="21:00"
				pattern="[0-9]{2}:[0-9]{2}"
                onInput={() => setTime(event.target.value)}
                value={time}
                required
			/>
			<LabelValidator
				options={{
					type: "time",
                    minTime: "10:00",
                    maxTime: "21:00"
				}}
				value={time}
			>
				Meetup time
			</LabelValidator>
		</Fragment>
	)
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TimePicker)
