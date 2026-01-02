import { Calendar, ChevronLeft, ChevronRight, Plus } from "lucide-react";

export default function CalendarPage() {
    const today = new Date();
    const monthName = today.toLocaleDateString("de-DE", { month: "long", year: "numeric" });

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-foreground">Kalender</h1>
                    <p className="text-foreground-secondary">Plane deine Termine und Events</p>
                </div>
                <button className="btn btn-primary">
                    <Plus className="w-4 h-4" />
                    Neuer Termin
                </button>
            </div>

            {/* Calendar Header */}
            <div className="card">
                <div className="flex items-center justify-between mb-6">
                    <button className="btn btn-ghost p-2">
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <h2 className="text-xl font-semibold text-foreground capitalize">{monthName}</h2>
                    <button className="btn btn-ghost p-2">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>

                {/* Placeholder Calendar Grid */}
                <div className="grid grid-cols-7 gap-2">
                    {["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"].map((day) => (
                        <div key={day} className="text-center text-sm font-medium text-foreground-muted py-2">
                            {day}
                        </div>
                    ))}
                    {Array.from({ length: 35 }, (_, i) => (
                        <div
                            key={i}
                            className="aspect-square flex items-center justify-center rounded-lg text-sm text-foreground-secondary hover:bg-background-tertiary cursor-pointer transition-colors"
                        >
                            {((i % 31) + 1)}
                        </div>
                    ))}
                </div>
            </div>

            {/* Coming Soon */}
            <div className="card border-primary-500/20">
                <div className="flex flex-col items-center justify-center py-8 text-center">
                    <div className="p-4 rounded-2xl bg-primary-500/10 mb-4">
                        <Calendar className="w-8 h-8 text-primary-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                        Google Calendar Integration kommt bald
                    </h3>
                    <p className="text-foreground-secondary max-w-md">
                        Verbinde deinen Kalender und erhalte AI-Terminvorschläge basierend auf deinem Energie-Level.
                    </p>
                </div>
            </div>
        </div>
    );
}
