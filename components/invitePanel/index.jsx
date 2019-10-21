import { h, Fragment } from "preact"
import { useState } from "preact/hooks"

import "./invite-panel.styl"

const InvitePanel = () => {
	let [openInvitation, setOpenInvitation] = useState(false)

	let setInviteHandler = (event, value) => {
		event.preventDefault()

        event.target.blur()
		setOpenInvitation(value)
	}

	return (
		<div className="invite-wrapper">
			<input type="text" style={{ visibility: "hidden" }} value="" />
			<button
				className="invite-button"
				onClick={event => setInviteHandler(event, !openInvitation)}
			>
                <i className="material-icons add-icon">add</i>
                <h5 className="name">
                    Invite friend
                </h5>
            </button>
            { !openInvitation ?
                <form className="invite-dialog">
                    <div className="search-wrapper">
                        <i className="material-icons side">search</i>
                        <input
                            className="search"
                            type="text"
                            name="Search for friend"
                        />
                    </div>
                </form>
            : null}
		</div>
	)
}

export default InvitePanel
