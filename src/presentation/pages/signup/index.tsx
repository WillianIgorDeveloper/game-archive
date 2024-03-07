import { useState } from "react";
import { ROUTES } from "@/utils/routes";
import { Link } from "react-router-dom";
import { AtSign, Eye, EyeOff } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SignUpSchema } from "./schema";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/presentation/components/ui/use-toast";
import { Button } from "@/presentation/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/presentation/components/ui/form";
import { Input } from "@/presentation/components/ui/input";
import { signup } from "@/main/requests/auth/signup";
import { Loader } from "@/presentation/components/ui/loader";

export function SignUpPage() {
	const { toast } = useToast();
	const navigate = useNavigate();

	const [passwordType, setPasswordType] = useState("password");
	const [loading, setLoading] = useState(false);

	const SignUpform = useForm<z.infer<typeof SignUpSchema>>({
		resolver: zodResolver(SignUpSchema),
		defaultValues: {
			tag: "",
			password: "",
		},
	});

	async function SignUpSubmit(values: z.infer<typeof SignUpSchema>) {
		try {
			setLoading(true);
			const response = await signup(values);

			if (!response.success) {
				toast({ title: response.message });
				return;
			}

			localStorage.setItem("token", response.body.token);
			navigate(ROUTES.APP);
		} catch (error) {
			toast({
				title:
					"An error occurred while trying to sign in. Please try again later.",
				variant: "destructive",
			});
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className="h-screen flex">
			<div className="bg-brand-gradient flex items-center justify-center relative lg:flex-1">
				<div className="absolute w-full h-full bg-zinc-500/50 backdrop-blur-sm" />
			</div>
			<div className="w-full p-3 flex flex-col items-center justify-center shadow-xl lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl relative">
				<Link to={ROUTES.HOME} className="absolute right-3 top-3">
					<Button variant="link">Home</Button>
				</Link>
				{loading ? (
					<Loader title="Creating account..." />
				) : (
					<>
						<Form {...SignUpform}>
							<form
								onSubmit={SignUpform.handleSubmit(SignUpSubmit)}
								className="w-full flex flex-col items-center justify-center p-3 space-y-3 max-w-sm mx-auto"
							>
								<legend className="self-start text-2xl font-semibold">
									Welcome!
								</legend>

								<FormField
									control={SignUpform.control}
									name="tag"
									render={({ field }) => (
										<FormItem className="w-full">
											<FormLabel>Tag</FormLabel>
											<FormControl>
												<div className="relative flex items-center">
													<Input
														id="tag"
														type="text"
														placeholder="yourtag"
														required
														className="pl-8"
														{...field}
													/>
													<AtSign className="absolute left-2 text-zinc-200 size-5" />
												</div>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={SignUpform.control}
									name="password"
									render={({ field }) => (
										<FormItem className="w-full">
											<FormLabel>Password</FormLabel>
											<FormControl>
												<div className="relative flex items-center">
													<Input
														id="password"
														type={passwordType}
														placeholder="At least 6 characters"
														required
														className="pr-8"
														{...field}
													/>
													{passwordType === "password" ? (
														<Eye
															className="absolute right-2 text-zinc-500 cursor-pointer hover:opacity-80"
															onClick={() => setPasswordType("text")}
														/>
													) : (
														<EyeOff
															className="absolute right-2 text-zinc-500 cursor-pointer hover:opacity-80"
															onClick={() => setPasswordType("password")}
														/>
													)}
												</div>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<Button className="w-full">Create account</Button>
							</form>
						</Form>

						<Link to={ROUTES.SIGNIN}>
							<Button variant="link" className="w-full">
								Already have an account? Sign in
							</Button>
						</Link>
					</>
				)}
			</div>
		</div>
	);
}
