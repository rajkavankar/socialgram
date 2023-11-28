import { Outlet, Navigate } from "react-router-dom"
import cover from "/side-img.svg"

const AuthLayout = () => {
	const isAuth = false

	if (isAuth) {
		return (
			<Navigate
				to="/"
				replace
			/>
		)
	} else {
		return (
			<>
				<section className="flex flex-1 justify-center items-center flex-col px-10 bg-slate-900">
					<Outlet />
				</section>

				<img
					src={cover}
					alt="cover"
					className="hidden xl:block h-screen object-cover w-1/2"
				/>
			</>
		)
	}
}

export default AuthLayout
