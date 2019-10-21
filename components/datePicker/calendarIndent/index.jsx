import { h } from 'preact'
import { useEffect } from 'preact/hooks'

const CalendarIndent = ({ indent }) => {
    let indentSpace = []

    for(let start = 0; start <= (indent - 1); start++){
        indentSpace.push(<div></div>)
    }

    return indentSpace
}

export default CalendarIndent