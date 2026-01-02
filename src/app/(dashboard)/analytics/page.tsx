import { BarChart3, TrendingUp, LineChart, PieChart } from "lucide-react";

export default function AnalyticsPage() {
    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-foreground">Analytics</h1>
                    <p className="text-foreground-secondary">Deine Daten visualisiert</p>
                </div>
                <div className="flex gap-2">
                    <button className="btn btn-secondary text-sm">Diese Woche</button>
                    <button className="btn btn-ghost text-sm">Dieser Monat</button>
                </div>
            </div>

            {/* Chart Placeholders */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                    <div className="flex items-center gap-3 mb-4">
                        <LineChart className="w-5 h-5 text-primary-400" />
                        <h3 className="font-semibold text-foreground">Stimmungsverlauf</h3>
                    </div>
                    <div className="h-48 flex items-center justify-center bg-background-tertiary rounded-xl">
                        <p className="text-foreground-muted">Chart kommt bald</p>
                    </div>
                </div>
                <div className="card">
                    <div className="flex items-center gap-3 mb-4">
                        <BarChart3 className="w-5 h-5 text-accent-500" />
                        <h3 className="font-semibold text-foreground">Habit Completion</h3>
                    </div>
                    <div className="h-48 flex items-center justify-center bg-background-tertiary rounded-xl">
                        <p className="text-foreground-muted">Chart kommt bald</p>
                    </div>
                </div>
                <div className="card">
                    <div className="flex items-center gap-3 mb-4">
                        <TrendingUp className="w-5 h-5 text-success-500" />
                        <h3 className="font-semibold text-foreground">Energie-Trend</h3>
                    </div>
                    <div className="h-48 flex items-center justify-center bg-background-tertiary rounded-xl">
                        <p className="text-foreground-muted">Chart kommt bald</p>
                    </div>
                </div>
                <div className="card">
                    <div className="flex items-center gap-3 mb-4">
                        <PieChart className="w-5 h-5 text-warning-500" />
                        <h3 className="font-semibold text-foreground">Time Distribution</h3>
                    </div>
                    <div className="h-48 flex items-center justify-center bg-background-tertiary rounded-xl">
                        <p className="text-foreground-muted">Chart kommt bald</p>
                    </div>
                </div>
            </div>

            {/* Placeholder content */}
            <div className="card">
                <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="p-4 rounded-2xl bg-primary-500/10 mb-4">
                        <BarChart3 className="w-8 h-8 text-primary-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                        Vollständige Analytics kommen bald
                    </h3>
                    <p className="text-foreground-secondary max-w-md">
                        Interaktive Charts, Korrelations-Heatmaps und Vergleichsansichten
                        für alle deine Daten.
                    </p>
                </div>
            </div>
        </div>
    );
}
