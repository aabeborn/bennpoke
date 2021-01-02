import * as React from "react"
import { ReactComponent as Logo } from "../../assets/images/Logo.svg"
import { ReactComponent as Pokeball } from "../../assets/images/Pokeball.svg"
import Button from "../button"

const Appbar: React.FC<{}> = () => {
	return (
		<div className="w-full inline-flex p-4 xl:p-8 justify-between">
			<Logo className="h-12 fill-current dark:text-yellow-400 text-red-500" />
			<div className="inline-flex items-center">
				<Pokeball className="h-9 fill-current" />
				<Button>My Account</Button>
			</div>
		</div>
	)
}

export default Appbar
