import loader from "/loader.svg"

const Loader = () => {
	return (
		<div className="flex-center w-full">
			<img
				src={loader}
				alt="loader"
				height={24}
				width={24}
			/>
		</div>
	)
}

export default Loader
