import * as React from "react"
import clsx from "clsx"
interface Props {
	variant?: "primary" | "secondary"
	disabled?: boolean
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}
const Button: React.FC<Props> = ({
	variant = "primary",
	children,
	disabled = false,
	onClick = () => {},
}) => {
	let classes = ""
	if (variant === "primary")
		classes = ` bg-red-500 text-white dark:bg-yellow-400 dark:text-gray-800 hover:bg-red-700 dark:hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-yellow-400 focus:ring-opacity-75 disabled:opacity-50 `
	else if (variant === "secondary")
		classes = `bg-white text-red-500 dark:bg-gray-800 dark:text-yellow-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-800 focus:ring-opacity-75"`
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className={clsx("py-2 px-4 rounded-full", classes)}>
			{children}
		</button>
	)
}

export default Button
