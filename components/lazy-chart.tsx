"use client"

import dynamic from "next/dynamic"
import type * as React from "react"

// Dynamically load heavy chart container; disable SSR if it relies on window.
const ChartModule = dynamic(() => import("@/components/ui/chart"), {
  ssr: false,
  loading: () => <div className="text-sm text-muted-foreground">Chargement du graphique…</div>,
})

// Re-export pieces that callers might use.
export const LazyChartContainer = ChartModule.ChartContainer
export const LazyChartTooltip = ChartModule.ChartTooltip
export const LazyChartTooltipContent = ChartModule.ChartTooltipContent
export const LazyChartLegend = ChartModule.ChartLegend
export const LazyChartLegendContent = ChartModule.ChartLegendContent
export const LazyChartStyle = ChartModule.ChartStyle

// Convenience wrapper component
export function LazyChart({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
