import { connect } from 'react-redux'

import AppLayout from 'components/appLayout'
import Header from 'components/header'
import Divider from 'components/divider'
import { SetterGroup, Setter } from 'components/setter'

import firebase from 'stores/firebase'
import 'firebase/auth'

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

const Profile = ({ store }) => {
    let { user } = store

    let logout = (event) => {
        event.preventDefault()

        firebase.auth().signOut()
    }

    return(
        <AppLayout>
            <Header detail={user.displayName}>Account</Header>
            <Divider>Account settings</Divider>
            <SetterGroup>
                <Setter onClick={(event) => logout(event)}>Logout</Setter>
            </SetterGroup>
        </AppLayout>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile)