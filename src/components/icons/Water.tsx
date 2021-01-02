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
				d="M20.61 16.9204C20.61 21.3827 16.9791 25 12.5 25C8.02094 25 4.38997 21.3827 4.38997 16.9204C4.38997 12.5806 12.0613 0.661548 12.482 0.011124C12.4917 -0.0037081 12.5084 -0.00370797 12.518 0.0111242C12.9387 0.661548 20.61 12.5806 20.61 16.9204ZM11.1481 22.4097C7.03267 21.5093 7.7369 16.9505 7.7369 16.9505C7.7369 16.9505 8.86068 19.7024 11.5878 20.5939C14.3149 21.4853 17.6105 20.1779 17.6105 20.1779C17.6105 20.1779 15.2635 23.3102 11.1481 22.4097Z"
				className={childClasses || ""}
			/>
		</svg>
	)
}

export default Type
