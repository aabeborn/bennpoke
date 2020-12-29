import * as React from "react"
import clsx from "clsx"
interface Props {
	text: string
	icon?: React.ReactNode
	classes?: string
}

const Pill: React.FC<Props> = ({ icon, text, classes = "" }) => {
	return (
		<div
			className={clsx(
				"bg-red-500 dark:bg-yellow-400 rounded-full inline-flex items:center justify-center p-2 overflow-hidden",
				classes,
			)}>
			{icon ? icon : null}
			<span className={clsx("text-sm uppercase", { "ml-1": icon })}>
				{text}
			</span>
		</div>
	)
}

export default Pill
