import { h } from "preact"

import { connect } from "react-redux"

import Tab from "components/appLayout/tab"

import "./aside.styl"

const mapToStateProps = store => {
	return {
		store: {
			user: {
				displayName: store.user.displayName,
				photo: store.user.photo
			}
		}
	}
}

const mapToDispatchProps = null

const Aside = ({ store }) => {
	let { user } = store
	let { displayName, photo } = user

	return (
		<aside id="aside">
			<div id="aside-list">
				<Tab href="/dashboard" icon="dashboard">
					Dashboard
				</Tab>
				<Tab href="/plan" icon="timeline">
					Plan
				</Tab>
				<Tab href="/invitation" icon="mail_outline">
					Invitation
				</Tab>
				<Tab href="/settings" icon="settings">
					Settings
				</Tab>
			</div>
			<div id="aside-profile">
				<Tab userProfile href="/profile" photo={photo}>{displayName}</Tab>
			</div>
		</aside>
	)
}

export default connect(
	mapToStateProps,
	mapToDispatchProps
)(Aside)
