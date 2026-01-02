import { BookOpen, Smile, Heart, Plus } from "lucide-react";

const moodEmojis = ["😔", "😕", "😐", "🙂", "😊"];

export default function JournalPage() {
    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-foreground">Journal</h1>
                    <p className="text-foreground-secondary">Reflektiere und tracke deine Stimmung</p>
                </div>
                <button className="btn btn-primary">
                    <Plus className="w-4 h-4" />
                    Neuer Eintrag
                </button>
            </div>

            {/* Mood Quick Entry */}
            <div className="card">
                <h3 className="text-lg font-semibold text-foreground mb-4">Wie fühlst du dich heute?</h3>
                <div className="flex items-center justify-center gap-4">
                    {moodEmojis.map((emoji, i) => (
                        <button
                            key={i}
                            className="text-4xl p-3 rounded-xl hover:bg-background-tertiary transition-all hover:scale-110"
                        >
                            {emoji}
                        </button>
                    ))}
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
                <div className="card">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-primary-500/10">
                            <BookOpen className="w-5 h-5 text-primary-400" />
                        </div>
                        <div>
                            <p className="text-sm text-foreground-secondary">Einträge</p>
                            <p className="text-xl font-bold text-foreground">42</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-accent-500/10">
                            <Smile className="w-5 h-5 text-accent-500" />
                        </div>
                        <div>
                            <p className="text-sm text-foreground-secondary">Ø Stimmung</p>
                            <p className="text-xl font-bold text-foreground">7.4/10</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-error-500/10">
                            <Heart className="w-5 h-5 text-error-500" />
                        </div>
                        <div>
                            <p className="text-sm text-foreground-secondary">Gratitude</p>
                            <p className="text-xl font-bold text-foreground">28</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Placeholder content */}
            <div className="card">
                <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="p-4 rounded-2xl bg-primary-500/10 mb-4">
                        <BookOpen className="w-8 h-8 text-primary-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                        Journal kommt bald
                    </h3>
                    <p className="text-foreground-secondary max-w-md">
                        Schreibe tägliche Einträge, tracke deine Stimmung und erhalte AI-generierte Reflexions-Prompts.
                    </p>
                </div>
            </div>
        </div>
    );
}
