import { h } from 'preact'

import './setter-group.styl'

const SetterGroup = ({ children }) => {
    return (
        <div className="setter-group">
            {children}
        </div>
    )
}

export default SetterGroup