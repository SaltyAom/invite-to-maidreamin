import { Fragment } from "preact"
import { useState } from "preact/hooks"

import { connect } from "react-redux"

import AppLayout from "components/appLayout"
import Header from "components/header"
import Divider from "components/divider"
import { Card, CardContainer } from "components/card"
import { UserContainer, UserDetail } from "components/otherUser"

import "stylus/dashboard.styl"

const mapStateToProps = store => {
	return {
		store: {
			user: {
				displayName: store.user.displayName
			}
		}
	}
}

const mapDispatchToProps = null

let mockupUser = [
    {
        name: "Aom Khunpanitchot",
        facebookURL: "https://facebook.com/aomKhunpanitchot"
    },
    {
        name: "Ai Chan",
        facebookURL: "https://facebook.com/AiChan"
    },
    {
        name: "Tuna Kaslana",
        facebookURL: "https://facebook.com/Tuna"
    }
]

const Dashboard = ({ store }) => {
	let { user } = store

	let [isNotify, setNotify] = useState(false),
		[dataTab, setDataTab] = useState(true)

	let setDataTabHandler = (event, value) => {
		event.preventDefault()

		setDataTab(value)
	}

	return (
		<AppLayout>
			<Header detail="Welcome back">{user.displayName}</Header>
			<Divider>Up coming</Divider>
			<CardContainer hasCreate>
				<Card users={mockupUser} time={new Date()}>Party after work</Card>
				<Card users={mockupUser} time={new Date()}>Let's meetup</Card>
			</CardContainer>
			<aside id="dashboard-aside">
				<div className="wrapper">
					<button
						className={`tab ${dataTab ? "active" : ""}`}
						onClick={event => setDataTabHandler(event, true)}
					>
						Detail
					</button>
					<button
						className={`tab ${!dataTab ? "active" : ""}`}
						onClick={event => setDataTabHandler(event, false)}
					>
						People
					</button>
				</div>
				<div className={`underline ${!dataTab ? "active" : ""}`} />
			</aside>

			<div id="dashboard-data">
				<h1 id="title">Party after work</h1>
				{dataTab ? (
					<Fragment>
						<p id="detail">
							<i className="material-icons">access_time</i>
							39 Minute left
						</p>
						<time id="time">15:00 PM, 14 Tue</time>
						<form
							id="notify-form"
							onClick={() => setNotify(!isNotify)}
						>
							<input
								id="notify-me"
								className="material-icons"
								type="checkbox"
								checked={isNotify}
							/>
							<label id="notify-detail">Notify me</label>
						</form>
						<p id="host">
							<img
								id="host-photo"
								src="https://graph.facebook.com/1318894661618537/picture"
							/>
							{user.displayName}
						</p>
					</Fragment>
				) : (
					<Fragment>
						<p id="detail">12 people is going.</p>
						<UserContainer>
							<UserDetail>Hatsune Miku</UserDetail>
							<UserDetail>Hatsune Miku</UserDetail>
							<UserDetail>Hatsune Miku</UserDetail>
							<UserDetail>Hatsune Miku</UserDetail>
						</UserContainer>
						<p id="host">
							<img
								id="host-photo"
								src="https://graph.facebook.com/1318894661618537/picture"
							/>
							{user.displayName}
						</p>
					</Fragment>
				)}
			</div>
		</AppLayout>
	)
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Dashboard)
