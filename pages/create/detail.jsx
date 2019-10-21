import { useState, useEffect } from 'preact/hooks'

import AppLayout from "components/appLayout"
import Header from "components/header"
import CreateLayout from "components/createLayout"
import LabelValidator from "components/labelValidator"
import DatePicker from 'components/datePicker'
import TimePicker from 'components/timePicker'

import { connect } from 'react-redux'

const mapStateToProps = (store) => {
	return {
		store: {
			event: {
				title: store.event.title,
				day: {
					date: store.event.day.date,
					month: store.event.day.month,
					year: store.event.day.year,
					time: store.event.day.time
				}
			}
		}
	}
}

const mapDispatchToProps = null

import "stylus/create/create.styl"

const Detail = ({ store }) => {
	let { event } = store

	let [ title, setTitle ] = useState(event.title),
		[ disabled, setDisabled ] = useState(true)
	
	useEffect(() => {
		let { title, day } = event,
			{ date, month, year, time } = day

			if(!title || !date || !month || !year || !time) return setDisabled(true)
			setDisabled(false)
	}, [event])

	return (
		<AppLayout createLayout>
			<Header detail="Adding some detail.">Detail</Header>
			<CreateLayout next="Invite" nextHref="invite" start disabled={disabled ? true : false}>
				<input
					className="input input-text"
					name="Event name"
					type="text"
                    value={title}
					placeholder="Let's add a title"
					onInput={(event) => setTitle(event.target.value)}
                    maxLength={40}
					required
				/>
				<LabelValidator
					options={{
						type: "text",
                        maxLength: 40
					}}
					value={title}
				>
					Title Name
				</LabelValidator>

				<TimePicker />

				<DatePicker />
			</CreateLayout>
		</AppLayout>
	)
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Detail)
