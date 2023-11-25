import React from "react"
import ReactDOM from "react-dom/client"
import App from "./Layout.tsx"
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from "react-router-dom"
import "./index.css"
import AuthLayout from "./layouts/_auth/AuthLayout.tsx"
import Layout from "./Layout.tsx"
import { Signup, Signin, Home } from "./layouts/index.ts"
import RootLayout from "./layouts/_root/RootLayout.tsx"

const routes = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<Layout />}>
			<Route element={<AuthLayout />}>
				<Route
					path="/sign-up"
					element={<Signup />}
				/>
				<Route
					path="/sign-in"
					element={<Signin />}
				/>
			</Route>
			<Route element={<RootLayout />}>
				<Route
					path="/"
					element={<Home />}
				/>
			</Route>
		</Route>
	)
)

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={routes} />
	</React.StrictMode>
)
