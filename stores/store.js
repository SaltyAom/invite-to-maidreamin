/* Redux */
import { createStore } from "redux"

const initState = {
	user: {
		displayName: undefined,
		photo: undefined
	},
	event: {
		title: undefined,
		description: undefined,
		day: {
			date: new Date().getDate(),
			month: new Date().getMonth(),
			year: new Date().getFullYear(),
			time: undefined
		},
		inviter: [],
	}
}

const reducers = (state, action) => {
	switch (action.type) {
		case "UPDATE_USER":
			return {
				...state,
				user: {
					displayName: action.payload.displayName,
					photo: action.payload.photo
				}
			}

		case "UPDATE_EVENT_TITLE": {
			return {
				...state,
				event: {
					...state.event,
					title: action.payload.title
				}
			}
		}

		case "UPDATE_EVENT_TIME": {
			return {
				...state,
				event: {
					...state.event,
					day: {
						...state.event.day,
						time: action.payload.time
					}
				}
			}
		}

		case "UPDATE_EVENT_DAY": {
			return {
				...state,
				event: {
					...state.event,
					day: {
						...state.event.day,
						date: action.payload.date,
						month: action.payload.month,
						year: action.payload.year	
					}
				}
			}
		}

		default:
			return {
				...state
			}
	}
}

const store = createStore(reducers, initState)
export default store
