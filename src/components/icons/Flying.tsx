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
				d="M8.72619 23.3333C12.3885 23.3333 15.5238 21.2979 16.8182 18.4126C16.834 18.3774 11.6215 19.7672 11.7877 19.2759C11.8619 19.0565 15.0572 17.8892 17.3852 16.5277C18.7232 15.7451 19.3394 14.0885 19.3394 14.0885C19.3394 14.0885 17.0851 15.183 15.9455 15.4606C13.6491 16.0202 11.6275 15.96 11.6275 15.9017C11.6275 15.7756 14.9842 15.1378 19.6496 12.2948C21.8441 10.9575 22.4402 8.65409 22.4402 8.65409C22.4402 8.65409 20.0275 10.0912 18.569 10.5657C15.1102 11.6908 11.9539 12.0299 11.9539 11.8776C11.9539 11.5517 14.7316 10.7878 17.6766 9.36083C19.2079 8.61889 20.534 7.64955 22.0707 6.57157C24.5853 4.80784 25 1.66663 25 1.66663C25 1.66663 22.5199 3.26624 21.3096 3.79746C16.3155 5.98944 11.9057 7.13924 8.72619 7.38817C3.92657 7.76395 0 11.1127 0 15.4606C0 19.8086 3.90684 23.3333 8.72619 23.3333Z"
				className={childClasses || ""}
			/>
		</svg>
	)
}

export default Type
