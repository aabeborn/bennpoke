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
				d="M17.2084 19.3064C17.5173 18.1769 16.9178 15.855 16.9178 15.855C16.9178 15.855 16.4829 17.7465 15.8034 18.4457C15.2237 19.042 14.5135 19.4556 13.495 19.5643C14.3277 19.1598 14.9004 18.3164 14.9004 17.3416C14.9004 15.9731 13.7719 14.8637 12.3798 14.8637C10.9877 14.8637 9.85917 15.9731 9.85917 17.3416C9.85917 17.7153 9.9434 18.0697 10.0941 18.3875C9.22343 17.6939 9.08652 16.5817 9.08652 16.5817C9.08652 16.5817 8.11425 20.6184 10.7933 22.5172C13.4722 24.416 18.7202 22.7839 18.7202 22.7839C18.7202 22.7839 11.21 28.0682 5.64486 22.3169C0.850953 17.3625 4.39365 10.84 4.39365 10.84C4.39365 10.84 4.24065 11.4451 4.24065 12.1475C4.24065 12.8499 4.62147 13.3843 4.62147 13.3843C4.62147 13.3843 5.75746 10.9898 6.64154 10.016C7.47826 9.09444 8.52714 8.34698 9.4331 7.70137C10.1305 7.2044 10.7432 6.76778 11.1091 6.35855C13.1246 4.10492 11.8888 0 11.8888 0C11.8888 0 14.1607 2.00293 14.795 4.58974C15.0368 5.57578 14.8812 6.69771 14.7422 7.70098C14.5164 9.32969 14.3339 10.6458 15.965 10.5604C18.6009 10.4223 16.3104 6.35855 16.3104 6.35855C16.3104 6.35855 22.2895 9.50113 21.8428 14.9973C21.3961 20.4935 15.3074 21.743 15.3074 21.743C15.3074 21.743 16.8995 20.4358 17.2084 19.3064Z"
				className={childClasses || ""}
			/>
		</svg>
	)
}

export default Type
