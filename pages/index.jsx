import { Fragment } from "preact"
import { useState, useEffect } from "preact/hooks"

import AuthLayout from "components/authLayout"

import firebase from "stores/firebase"
import "firebase/auth"
import "firebase/firestore"
const firestore = firebase.firestore()

import "stylus/landing.styl"
import { useRouter } from "next/router"

const Index = () => {
	let [showLogin, setShowLogin] = useState(false)

	let router = useRouter()

	let signInWithFacebook = event => {
		event.preventDefault()

		let provider = new firebase.auth.FacebookAuthProvider()
		provider.addScope('user_friends')
		provider.addScope('user_link')
		provider.addScope('user_hometown')

		firebase
			.auth()
			.signInWithPopup(provider)
			.then(async userData => {
				console.log(userData)
				if (userData.additionalUserInfo.isNewUser)
					await firestore
						.collection("users")
						.doc(`${userData.user.uid}`)
						.set({
							name: userData.user.displayName,
							image: userData.user.photoURL,
							facebookURL: userData.additionalUserInfo.profile.link,
							uid: userData.user.uid
						})
				router.push("/dashboard")
			})
			.catch(error => {
				console.error(error.code)
			})
	}

	let setShowLoginHandler = (event, value) => {
		event.preventDefault()
		event.target.blur()

		let user = firebase.auth().currentUser
		if (user) {
			router.push("/dashboard")
		} else {
			setShowLogin(value)
		}
	}

	if (showLogin === false) {
		return (
			<AuthLayout manualLoginRedirect>
				<section id="landing">
					<div id="landing-wrapper">
						<span className="title">Let's meet up at</span>
						<span className="title main">Somewhere</span>
						<button
							id="landing-continue"
							onClick={event => setShowLoginHandler(event, true)}
						>
							See who's going
						</button>
					</div>
					<img
						id="landing-info-graphic"
						src="/static/svg/mobile.svg"
						alt="Person holding a mobile phone"
					/>
					<div id="landing-bubble" />
					<div id="landing-background" />
				</section>
			</AuthLayout>
		)
	}

	return (
		<AuthLayout>
			<section id="landing">
				<div id="login-wrapper">
					<button
						id="login-back"
						onClick={event => setShowLoginHandler(event, false)}
					>
						<i className="material-icons">chevron_left</i>
						Back
						<div className="underline" />
					</button>
					<span className="title">Get people to know you.</span>
					<button
						id="facebook-button"
						onClick={event => signInWithFacebook(event)}
					>
						<img
							id="facebook-icon"
							src="/static/svg/facebook.svg"
							alt="Facebook icon"
						/>
						Sign in with{" "}
						<span
							style={{ fontWeight: "bold", marginLeft: ".3em" }}
						>
							Facebook
						</span>
					</button>
				</div>
				<img
					id="landing-info-graphic"
					className="login"
					src="/static/svg/mobile.svg"
					alt="Person holding a mobile phone"
				/>
				<div id="landing-bubble" className="login" />
				<div id="landing-background" />
			</section>
		</AuthLayout>
	)
}

export default Index
