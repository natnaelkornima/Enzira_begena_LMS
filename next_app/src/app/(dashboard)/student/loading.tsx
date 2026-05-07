import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export default function StudentDashboardLoading() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      {/* Welcome Skeleton */}
      <header className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="space-y-2 w-full max-w-sm">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-4 w-full" />
        </div>
        <Skeleton className="h-20 w-64 rounded-2xl" />
      </header>

      {/* Stats Skeleton */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="flex items-center p-4 space-x-4">
            <Skeleton className="h-10 w-10 rounded-xl" />
            <div className="space-y-2 flex-1">
              <Skeleton className="h-3 w-20" />
              <Skeleton className="h-6 w-12" />
            </div>
          </Card>
        ))}
      </section>

      {/* Courses Grid Skeleton */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <Skeleton className="h-7 w-48" />
          <Skeleton className="h-4 w-16" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="flex flex-col">
              <Skeleton className="h-40 w-full rounded-t-2xl rounded-b-none" />
              <CardContent className="p-5 flex-1 flex flex-col space-y-4">
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <div className="mt-auto space-y-2 pt-4">
                  <Skeleton className="h-3 w-full" />
                </div>
                <Skeleton className="h-10 w-full mt-4" />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
