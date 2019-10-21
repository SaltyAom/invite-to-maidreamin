import { h, Fragment } from "preact"

import UserDetail from "./userDetail"

import "./card.styl"

const UserList = ({
	users = [
		{
			name: false
		},
		{
			name: false
		}
	]
}) => {
	return (
		<ul className="wrapper">
			{users[0].name ? <UserDetail>{users[0].name}</UserDetail> : null}
			{users[1].name ? <UserDetail>{users[1].name}</UserDetail> : null}
		</ul>
	)
}

const Card = props => {
	let { children, users, time } = props

	let getDay = day => {
		switch (day) {
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
		}
	}

	return (
		<div>
			<button className="card">
				<h4 className="title">{children}</h4>
				<UserList users={users} />
				{time ? (
					<footer className="footer">
						<i className="material-icons">access_time</i>
						{`${time.getHours()}:${time.getMinutes()}, ${time.getDate()} ${getDay(
							time.getDay()
						)}`}
					</footer>
				) : null}
			</button>
		</div>
	)
}

export default Card
