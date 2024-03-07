import { Skeleton } from "@/presentation/components/ui/skeleton";

export function SkeletonLoader() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="p-3 border shadow bg-zinc-50 rounded-lg">
        <Skeleton className="w-full h-4 rounded-full" />
      </div>
      <div className="p-3 border shadow bg-zinc-50 rounded-lg">
        <Skeleton className="w-full h-4 rounded-full" />
      </div>
      <div className="p-3 border shadow bg-zinc-50 rounded-lg">
        <Skeleton className="w-full h-4 rounded-full" />
      </div>
      <div className="p-3 border shadow bg-zinc-50 rounded-lg">
        <Skeleton className="w-full h-4 rounded-full" />
      </div>
    </div>
  );
}
