import { Brain, MessageSquare, Sparkles, TrendingUp } from "lucide-react";

export default function InsightsPage() {
    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-foreground">AI Insights</h1>
                    <p className="text-foreground-secondary">Personalisierte Empfehlungen von deiner AI</p>
                </div>
            </div>

            {/* AI Chat Teaser */}
            <div className="card border-primary-500/30 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary-500/10">
                        <MessageSquare className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-foreground">Frag die AI</h3>
                        <p className="text-sm text-foreground-secondary">
                            Stelle Fragen zu deinen Daten und erhalte fundierte Antworten
                        </p>
                    </div>
                </div>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Warum war ich letzte Woche so müde?"
                        className="input pr-12 bg-background-secondary"
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors">
                        <Sparkles className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Sample Insights */}
            <div className="grid md:grid-cols-2 gap-4">
                <div className="card">
                    <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-accent-500/10">
                            <TrendingUp className="w-5 h-5 text-accent-500" />
                        </div>
                        <div>
                            <h4 className="font-medium text-foreground mb-1">Schlaf-Training Korrelation</h4>
                            <p className="text-sm text-foreground-secondary">
                                An Tagen mit 7+ Stunden Schlaf trainierst du 40% wahrscheinlicher.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-warning-500/10">
                            <Brain className="w-5 h-5 text-warning-500" />
                        </div>
                        <div>
                            <h4 className="font-medium text-foreground mb-1">Energie-Peak erkannt</h4>
                            <p className="text-sm text-foreground-secondary">
                                Deine produktivste Zeit ist zwischen 9-11 Uhr morgens.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Placeholder content */}
            <div className="card">
                <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="p-4 rounded-2xl bg-primary-500/10 mb-4 energy-glow">
                        <Brain className="w-8 h-8 text-primary-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                        AI Insights kommt bald
                    </h3>
                    <p className="text-foreground-secondary max-w-md">
                        Erhalte wöchentliche Reports, Korrelationsanalysen und prädiktive Warnungen
                        basierend auf deinen Daten.
                    </p>
                </div>
            </div>
        </div>
    );
}
