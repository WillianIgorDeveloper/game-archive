import { z } from "zod";

export const SignUpSchema = z.object({
	tag: z.string().min(3).max(25),
	password: z.string().min(6).max(25),
});
