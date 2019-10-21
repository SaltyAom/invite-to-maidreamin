import { h, Fragment } from "preact"

import "./timeline.styl"

const Timeline = props => {
	let { children, end, title } = props

	return (
		<Fragment>
			<div className="timeline">
				<div className="time" />
				<div className="line" />
				<div className="data">
					{ title ?
						<Fragment>
							<h4 className="title">{title}</h4> 
							<div className="title-placeholder"></div>
						</Fragment>
						: null }
					{children}
				</div>
			</div>
			{end ? (
				<div className="timeline-end">
					<div className="time" />
				</div>
			) : null}
		</Fragment>
	)
}

export default Timeline
