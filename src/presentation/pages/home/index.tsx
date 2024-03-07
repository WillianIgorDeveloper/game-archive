import { Link } from "react-router-dom";
import { ROUTES } from "@/utils/routes";
import { ChevronsRight } from "lucide-react";
import { Button } from "@/presentation/components/ui/button";

export function HomePage() {
	return (
		<>
			<main>
				<section>
					<div className="container mx-auto text-center p-5 h-screen flex flex-col items-center justify-center gap-3 max-w-sm md:flex-row-reverse md:text-left md:max-w-none md:gap-5 md:h-[80vh] lg:gap-8 xl:gap-28">
						<img
							src="/icon.png"
							alt="icon"
							className="md:max-w-xs animate-fade-right duration-500"
						/>
						<div className="space-y-3 md:max-w-xs lg:max-w-md xl:max-w-lg animate-fade-left duration-500">
							<h2 className="text-3xl p-1 font-black bg-brand-gradient text-transparent bg-clip-text lg:text-4xl xl:text-6xl">
								Game Archive
							</h2>
							<div className="space-x-3 pt-1">
								<Link to={ROUTES.APP}>
									<Button>Get Started</Button>
								</Link>
								<Link to={ROUTES.SIGNUP}>
									<Button variant="outline" className="gap-2">
										Create Account <ChevronsRight />
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
