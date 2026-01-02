import { Heart, Pill, Activity, Moon, Plus } from "lucide-react";

export default function HealthPage() {
    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-foreground">Gesundheit</h1>
                    <p className="text-foreground-secondary">Medikamente, Symptome & Vitaldaten</p>
                </div>
                <button className="btn btn-primary">
                    <Plus className="w-4 h-4" />
                    Eintrag hinzufügen
                </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="card">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-error-500/10">
                            <Pill className="w-5 h-5 text-error-500" />
                        </div>
                        <div>
                            <p className="text-sm text-foreground-secondary">Medikamente</p>
                            <p className="text-xl font-bold text-foreground">3 aktiv</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-accent-500/10">
                            <Activity className="w-5 h-5 text-accent-500" />
                        </div>
                        <div>
                            <p className="text-sm text-foreground-secondary">Compliance</p>
                            <p className="text-xl font-bold text-foreground">94%</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-primary-500/10">
                            <Moon className="w-5 h-5 text-primary-400" />
                        </div>
                        <div>
                            <p className="text-sm text-foreground-secondary">Ø Schlaf</p>
                            <p className="text-xl font-bold text-foreground">7.2h</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-warning-500/10">
                            <Heart className="w-5 h-5 text-warning-500" />
                        </div>
                        <div>
                            <p className="text-sm text-foreground-secondary">Ø Puls</p>
                            <p className="text-xl font-bold text-foreground">68 bpm</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Placeholder content */}
            <div className="card">
                <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="p-4 rounded-2xl bg-accent-500/10 mb-4">
                        <Heart className="w-8 h-8 text-accent-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                        Health Tracking kommt bald
                    </h3>
                    <p className="text-foreground-secondary max-w-md">
                        Tracke Medikamente mit Erinnerungen, logge Symptome und verfolge deine Vitaldaten mit AI-Insights.
                    </p>
                </div>
            </div>
        </div>
    );
}
