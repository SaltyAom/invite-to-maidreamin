import { h, Fragment } from "preact"
import { useState, useEffect } from "preact/hooks"

import { useRouter } from "next/router"

import { connect } from "react-redux"

import firebase from "stores/firebase"
import "firebase/auth"

import LoadingIndicator from "components/loadingIndicator"

const mapStateToProps = (store, ownProps) => {
	return {
		store: {
			user: {
				displayName: store.user.displayName
			}
		},
		props: ownProps
	}
}

const mapDispatchToProps = dispatch => {
	return {
		dispatch: {
			updateUser: ({ displayName, photo }) => {
				dispatch({
					type: "UPDATE_USER",
					payload: {
						displayName: displayName,
						photo: photo
					}
				})
			}
		}
	}
}

const AuthLayout = ({ store, dispatch, props }) => {
	let { user } = store
	let { updateUser } = dispatch
	let { children, manualLoginRedirect } = props

	let [isAuth, setAuth] = user.displayName ? useState(true) : useState(undefined)

	let router = useRouter()

	useEffect(() => {
		firebase.auth().onAuthStateChanged(async authUser => {
			if (authUser) {
				await updateUser({
					displayName: authUser.displayName,
					photo: authUser.photoURL
				})
				if(!isAuth)
					setAuth(true)
			} else {
				setAuth(false)
				return
			}
		})
	}, [])

	useEffect(() => {
		/**
		 * Only use on offline dev
		if (isAuth && !manualLoginRedirect && router.pathname === "/")
			router.push("/dashboard")
		if (isAuth === false && router.pathname !== "/") router.push("/")
		*/
	}, [isAuth])
	
	if (isAuth === undefined) return <LoadingIndicator />

	return <Fragment>{children}</Fragment>
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AuthLayout)
