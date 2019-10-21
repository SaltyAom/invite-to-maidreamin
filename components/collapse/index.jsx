import { h } from 'preact'

const Collapse = (props) => {
    let { children, collapse = false } = props

    if(collapse){
        return(
            <div className="collapse">
                {children}
            </div>
        )
    }

    return null
}

export default Collapse