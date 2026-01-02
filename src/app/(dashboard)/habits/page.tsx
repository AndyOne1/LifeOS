import { CheckSquare, Plus, Flame, TrendingUp } from "lucide-react";

export default function HabitsPage() {
    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-foreground">Habits</h1>
                    <p className="text-foreground-secondary">Tracke deine täglichen Gewohnheiten</p>
                </div>
                <button className="btn btn-primary">
                    <Plus className="w-4 h-4" />
                    Neues Habit
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
                <div className="card">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-success-500/10">
                            <CheckSquare className="w-5 h-5 text-success-500" />
                        </div>
                        <div>
                            <p className="text-sm text-foreground-secondary">Aktive Habits</p>
                            <p className="text-xl font-bold text-foreground">7</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-warning-500/10">
                            <Flame className="w-5 h-5 text-warning-500" />
                        </div>
                        <div>
                            <p className="text-sm text-foreground-secondary">Längster Streak</p>
                            <p className="text-xl font-bold text-foreground">23 Tage</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-primary-500/10">
                            <TrendingUp className="w-5 h-5 text-primary-400" />
                        </div>
                        <div>
                            <p className="text-sm text-foreground-secondary">Durchschnitt</p>
                            <p className="text-xl font-bold text-foreground">82%</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Placeholder content */}
            <div className="card">
                <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="p-4 rounded-2xl bg-primary-500/10 mb-4">
                        <CheckSquare className="w-8 h-8 text-primary-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                        Habit Tracking kommt bald
                    </h3>
                    <p className="text-foreground-secondary max-w-md">
                        Hier wirst du bald deine Habits erstellen, tracken und mit
                        Heatmaps und Statistiken analysieren können.
                    </p>
                </div>
            </div>
        </div>
    );
}
