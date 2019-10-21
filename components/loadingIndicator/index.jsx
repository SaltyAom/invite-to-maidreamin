import { h } from 'preact'

import './loading-indicator.styl'

const LoadingIndicator = () => {
    return (
        <div id="loading-indicator-wrapper">
            <svg id="loading-indicator" viewBox="25 25 50 50">
                <circle
                    id="loading"
                    cx="50"
                    cy="50"
                    r="20"
                    fill="none"
                    stroke-width="3"
                    stroke-miterlimit="10"
                />
            </svg>
        </div>
    )
}

export default LoadingIndicator
