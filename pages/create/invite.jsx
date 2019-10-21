import AppLayout from 'components/appLayout'
import Header from 'components/header'
import CreateLayout from 'components/createLayout'
import InvitePanel from 'components/invitePanel'

const Invite = () => {
    return(
        <AppLayout createLayout>
            <Header detail="Invite your friend.">Invite</Header>
            <CreateLayout back="Detail" backHref="detail" next="Review" nextHref="review">
                <InvitePanel />
            </CreateLayout>
        </AppLayout>
    )
}

export default Invite