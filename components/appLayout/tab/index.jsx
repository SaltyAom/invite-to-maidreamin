import { h } from 'preact'

import Link from "next/link"
import { useRouter } from 'next/router'

const Tab = props => {
    let { children, href, icon, userProfile = false, photo } = props

    let router = useRouter()

    if(userProfile) return(
        <Link href="/profile">
            <a id="profile-tab" className={`tab ${router.pathname === href ? "active" : null}`}>
                <img id="profile-image" src={photo} alt={`${children}'s photo`} />
                <p className="detail">
                    {children}
                </p>
            </a>
        </Link>
    )

    return (
        <Link href={href}>
            <a className={`tab ${router.pathname === href ? "active" : null}`}>
                { icon ?
                    <i className="material-icons">{icon}</i>
                : null }
                <p className="detail">
                    {children}
                </p>
            </a>
        </Link>
    )
}

export default Tab