import { h } from 'preact'

import Link from 'next/link'

import Tab from "components/appLayout/tab"

import './create-panel.styl'

const CreatePanel = () => {
    return(
        <aside id="create-panel">
            <div id="create-panel-list">
                <Tab href="/dashboard" icon="close">
                    Cancel
                </Tab>
                <Tab href="/create/detail" icon="dashboard">
                    Add some detail
                </Tab>
                <Tab href="/create/invite" icon="timeline">
                    Invite your friend
                </Tab>
                <Tab href="/create/review" icon="mail_outline">
                    Review
                </Tab>
            </div>
        </aside>
    )
}

export default CreatePanel