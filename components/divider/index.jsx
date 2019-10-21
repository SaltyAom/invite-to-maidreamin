import { h } from 'preact'

import './divider.styl'

const Divider = ({ children }) => (
    <h3 className="divider">
        {children}
    </h3>
)

export default Divider