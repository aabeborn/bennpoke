import * as React from "react"
import clsx from "clsx"

interface Props {
	classes?: string
	childClasses?: string
}

const Type: React.FC<Props> = ({ classes, childClasses }) => {
	return (
		<svg
			className={classes || ""}
			width="25"
			height="25"
			viewBox="0 0 25 25"
			xmlns="http://www.w3.org/2000/svg">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M0.00249564 12.5152C-0.000830304 12.5096 -0.000831974 12.5026 0.0024912 12.4968L6.28883 1.75631C6.2921 1.75074 6.29811 1.74731 6.30455 1.74731H18.7644C18.7709 1.74731 18.7769 1.75077 18.7802 1.75639L24.9975 12.4969C25.0008 12.5026 25.0008 12.5095 24.9975 12.5151L18.7802 23.2436C18.7769 23.2492 18.7709 23.2527 18.7644 23.2527H6.30455C6.29811 23.2527 6.2921 23.2493 6.28883 23.2437L0.00249564 12.5152ZM18.2919 12.5C18.2919 15.6977 15.6996 18.2899 12.502 18.2899C9.30431 18.2899 6.71207 15.6977 6.71207 12.5C6.71207 9.3023 9.30431 6.71011 12.502 6.71011C15.6996 6.71011 18.2919 9.3023 18.2919 12.5Z"
				className={childClasses || ""}
			/>
		</svg>
	)
}

export default Type
