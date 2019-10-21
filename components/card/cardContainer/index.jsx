import { h } from "preact"

import Link from 'next/link'

import "./card-container.styl"

const CardContainer = props => {
	let { children, hasCreate = false } = props

	return (
		<div className="card-container">
			{children}
			{ hasCreate ?
				<Link href="/create">
					<a className="create">
						<i className="material-icons title" style={{ fontSize: 48 }}>
							add
						</i>
						<p className="detail">Create</p>
					</a>
				</Link>
			: null }
		</div>
	)
}

export default CardContainer
