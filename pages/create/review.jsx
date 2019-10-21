import { h } from 'preact'

import AppLayout from 'components/appLayout'
import Header from 'components/header'
import CreateLayout from 'components/createLayout'

const Invite = () => {
    return(
        <AppLayout createLayout>
            <Header detail="Check the correction">Review</Header>
            <CreateLayout back="Invite" backHref="invite" next="Create event" nextHref="done">

            </CreateLayout>
        </AppLayout>
    )
}

export default Invite