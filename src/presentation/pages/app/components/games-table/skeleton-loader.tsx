import { Skeleton } from "@/presentation/components/ui/skeleton";

export function SkeletonLoader() {
	return (
		<>
			<div className="p-3 border shadow bg-zinc-50 rounded-lg w-full">
				<Skeleton className="w-full h-4 rounded-full" />
			</div>
			<div className="p-3 border shadow bg-zinc-50 rounded-lg w-full">
				<Skeleton className="w-full h-4 rounded-full" />
			</div>
			<div className="p-3 border shadow bg-zinc-50 rounded-lg w-full">
				<Skeleton className="w-full h-4 rounded-full" />
			</div>
			<div className="p-3 border shadow bg-zinc-50 rounded-lg w-full">
				<Skeleton className="w-full h-4 rounded-full" />
			</div>
		</>
	);
}
