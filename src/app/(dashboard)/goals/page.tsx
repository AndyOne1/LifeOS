import { Target, Plus, CheckCircle2, Circle, Flag } from "lucide-react";

const sampleGoals = [
    { id: 1, title: "10kg abnehmen", progress: 45, deadline: "März 2026" },
    { id: 2, title: "Marathon laufen", progress: 20, deadline: "September 2026" },
    { id: 3, title: "Buch schreiben", progress: 10, deadline: "Dezember 2026" },
];

export default function GoalsPage() {
    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-foreground">Goals & Projects</h1>
                    <p className="text-foreground-secondary">Setze und verfolge deine Ziele</p>
                </div>
                <button className="btn btn-primary">
                    <Plus className="w-4 h-4" />
                    Neues Ziel
                </button>
            </div>

            {/* Sample Goals */}
            <div className="space-y-4">
                {sampleGoals.map((goal) => (
                    <div key={goal.id} className="card hover:border-primary-500/30 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="p-2.5 rounded-xl bg-primary-500/10">
                                <Target className="w-5 h-5 text-primary-400" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-semibold text-foreground">{goal.title}</h3>
                                    <span className="text-sm text-foreground-muted flex items-center gap-1">
                                        <Flag className="w-3 h-3" />
                                        {goal.deadline}
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex-1 h-2 bg-background-tertiary rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all"
                                            style={{ width: `${goal.progress}%` }}
                                        />
                                    </div>
                                    <span className="text-sm font-medium text-foreground">{goal.progress}%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Placeholder content */}
            <div className="card">
                <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="p-4 rounded-2xl bg-accent-500/10 mb-4">
                        <Target className="w-8 h-8 text-accent-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                        Goals & Projects kommt bald
                    </h3>
                    <p className="text-foreground-secondary max-w-md">
                        Erstelle SMART-Goals mit AI-Unterstützung, verknüpfe sie mit Habits
                        und verfolge deinen Fortschritt.
                    </p>
                </div>
            </div>
        </div>
    );
}
