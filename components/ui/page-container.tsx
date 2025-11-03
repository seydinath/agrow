import { cn } from "@/lib/utils"

interface PageContainerProps {
  children: React.ReactNode
  className?: string
  withPadding?: boolean
}

export function PageContainer({ children, className, withPadding = true }: PageContainerProps) {
  return (
    <div className={cn(
      "flex-1 w-full",
      withPadding && "pt-32 pb-20",
      className
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {children}
      </div>
    </div>
  )
}