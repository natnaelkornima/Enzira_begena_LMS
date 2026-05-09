import { Button } from "@/components/ui/button";
import { FolderOpen } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function EmptyState({ 
  title, 
  description, 
  actionLabel, 
  actionHref,
  icon,
  className 
}: EmptyStateProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center p-12 text-center border border-dashed rounded-2xl bg-card", className)}>
      <div className="h-20 w-20 rounded-full bg-muted/50 flex items-center justify-center mb-6">
        {icon || <FolderOpen className="h-10 w-10 text-muted-foreground/50" />}
      </div>
      <h3 className="text-xl font-bold tracking-tight mb-2">{title}</h3>
      <p className="text-muted-foreground max-w-sm mb-6 leading-relaxed">
        {description}
      </p>
      {actionLabel && actionHref && (
        <Button asChild className="shadow-md">
          <Link href={actionHref}>{actionLabel}</Link>
        </Button>
      )}
    </div>
  );
}
