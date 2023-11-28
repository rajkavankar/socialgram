import { Link } from "react-router-dom"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { signinSchema } from "@/lib/validations"
import Loader from "@/components/shared/Loader"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"

const Signin = () => {
	let isLoading = false
	const form = useForm<z.infer<typeof signinSchema>>({
		resolver: zodResolver(signinSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	})

	const onSubmit = (values: z.infer<typeof signinSchema>) => {
		console.log(values)
	}
	return (
		<Form {...form}>
			<div className="text-slate-200 text-center space-y-1 mb-1">
				<h1 className="text-3xl">Sign in</h1>
				<p className="text-sm">to share memories with like minded people</p>
			</div>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="gap-5 flex flex-col w-1/2 text-slate-200">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Email <sup className="text-red-400">*</sup>
							</FormLabel>
							<FormControl>
								<Input
									placeholder="Enter email"
									className="bg-stone-700 focus-visible:ring-"
									{...field}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Password <sup className="text-red-400">*</sup>
							</FormLabel>
							<FormControl>
								<Input
									placeholder="Enter password"
									className="bg-stone-700 focus-visible:ring-"
									{...field}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				<Button
					type="submit"
					disabled={isLoading}
					className="text-slate-200">
					{isLoading ? (
						<div className="flex justify-center items-center">
							<Loader /> Loading...
						</div>
					) : (
						"Submit"
					)}
				</Button>
			</form>
			<div>
				<p className="text-sm text-center text-slate-200 mt-2">
					Don't hame an account
					<Link
						className="text-primary hover:underline"
						to="/sign-up">
						Signup here
					</Link>
				</p>
			</div>
		</Form>
	)
}

export default Signin
