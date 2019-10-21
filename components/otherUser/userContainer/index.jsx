import { h } from 'preact'

import './user-container.styl'

const UserContainer = ({ children }) => {
    return(
        <ul className="user-container">
            {children}
        </ul>
    )
}

export default UserContainer