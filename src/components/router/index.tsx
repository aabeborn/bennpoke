import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../../views/home"
import NotFound from "../../views/notFound"

const Router: React.FC<{}> = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Router
