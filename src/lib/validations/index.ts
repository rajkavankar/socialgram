import { z } from "zod"

export const signupSchema = z
	.object({
		name: z.string().min(1, {
			message: "Name is required",
		}),
		email: z
			.string()
			.min(1, {
				message: "Email is required",
			})
			.email({ message: "Enter a valid email" }),
		password: z.string().min(1, {
			message: "Password is required",
		}),
		confirmPassword: z.string().min(1, {
			message: "Confirm password is required",
		}),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Confirm password doesn't match",
		path: ["confirmPassword"],
	})

export const signinSchema = z.object({
	email: z
		.string()
		.min(1, {
			message: "Email is required",
		})
		.email({ message: "Enter a valid email" }),
	password: z.string().min(1, {
		message: "Password is required",
	}),
})
