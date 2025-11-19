"use client"

import dynamic from "next/dynamic"
import type * as React from "react"

// Dynamically load heavy chart pieces; disable SSR if they rely on window.
const loading = () => (
  <div className="text-sm text-muted-foreground">Chargement du graphique…</div>
)

export const LazyChartContainer = dynamic(
  () =>
    import("@/components/ui/chart").then((m) => ({
      default: m.ChartContainer as unknown as React.ComponentType<any>,
    })),
  { ssr: false, loading },
)

export const LazyChartTooltip = dynamic(
  () =>
    import("@/components/ui/chart").then((m) => ({
      default: m.ChartTooltip as unknown as React.ComponentType<any>,
    })),
  { ssr: false, loading },
)

export const LazyChartTooltipContent = dynamic(
  () =>
    import("@/components/ui/chart").then((m) => ({
      default: m.ChartTooltipContent as unknown as React.ComponentType<any>,
    })),
  { ssr: false, loading },
)

export const LazyChartLegend = dynamic(
  () =>
    import("@/components/ui/chart").then((m) => ({
      default: m.ChartLegend as unknown as React.ComponentType<any>,
    })),
  { ssr: false, loading },
)

export const LazyChartLegendContent = dynamic(
  () =>
    import("@/components/ui/chart").then((m) => ({
      default: m.ChartLegendContent as unknown as React.ComponentType<any>,
    })),
  { ssr: false, loading },
)

export const LazyChartStyle = dynamic(
  () =>
    import("@/components/ui/chart").then((m) => ({
      default: m.ChartStyle as unknown as React.ComponentType<any>,
    })),
  { ssr: false, loading },
)

// Convenience wrapper component
export function LazyChart({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
