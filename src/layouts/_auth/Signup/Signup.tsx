import { Link } from "react-router-dom"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { signupSchema } from "@/lib/validations"
import Loader from "@/components/shared/Loader"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"

const Signup = () => {
	let isLoading = false
	const form = useForm<z.infer<typeof signupSchema>>({
		resolver: zodResolver(signupSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
	})

	const onSubmit = (values: z.infer<typeof signupSchema>) => {
		console.log(values)
	}
	return (
		<Form {...form}>
			<div className="text-slate-200 text-center space-y-1 mb-1">
				<h1 className="text-3xl">Sign up</h1>
				<p className="text-sm">to share memories with like minded people</p>
			</div>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="gap-5 flex flex-col w-1/2 text-slate-200">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Name <sup className="text-red-400">*</sup>
							</FormLabel>
							<FormControl>
								<Input
									placeholder="Enter name"
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
				<FormField
					control={form.control}
					name="confirmPassword"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Confirm password <sup className="text-red-400">*</sup>
							</FormLabel>
							<FormControl>
								<Input
									placeholder="Confirm password"
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
					Already have an account{" "}
					<Link
						className="text-primary hover:underline"
						to="/sign-in">
						Login here
					</Link>
				</p>
			</div>
		</Form>
	)
}

export default Signup
