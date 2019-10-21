import { h } from 'preact'

import './header.styl'

const Header = props => {
    let { children, detail } = props

    return(
        <div id="header-container">
            { detail ? 
                <h2 id="header-detail">{detail}</h2>
            : null }
            <h1 id="header">
                {children}
            </h1>
        </div>
    )
}

export default Header