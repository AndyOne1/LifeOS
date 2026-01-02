import { Settings, User, Bell, Palette, Shield, Database } from "lucide-react";

const settingsSections = [
    {
        icon: User,
        title: "Profil",
        description: "Name, E-Mail und Profilbild bearbeiten",
    },
    {
        icon: Bell,
        title: "Benachrichtigungen",
        description: "Push-Notifications und Erinnerungen konfigurieren",
    },
    {
        icon: Palette,
        title: "Erscheinungsbild",
        description: "Theme, Farben und Layout anpassen",
    },
    {
        icon: Shield,
        title: "Datenschutz",
        description: "Datenexport und Privatsphäre-Einstellungen",
    },
    {
        icon: Database,
        title: "Integrationen",
        description: "Kalender, Wearables und andere Apps verbinden",
    },
];

export default function SettingsPage() {
    return (
        <div className="space-y-6 animate-fade-in max-w-4xl">
            <div>
                <h1 className="text-2xl font-bold text-foreground">Einstellungen</h1>
                <p className="text-foreground-secondary">Konfiguriere LifeOS nach deinen Wünschen</p>
            </div>

            {/* Settings Sections */}
            <div className="space-y-3">
                {settingsSections.map((section) => (
                    <button
                        key={section.title}
                        className="card w-full text-left hover:border-primary-500/30 transition-colors group"
                    >
                        <div className="flex items-center gap-4">
                            <div className="p-2.5 rounded-xl bg-background-tertiary group-hover:bg-primary-500/10 transition-colors">
                                <section.icon className="w-5 h-5 text-foreground-secondary group-hover:text-primary-400 transition-colors" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-foreground">{section.title}</h3>
                                <p className="text-sm text-foreground-secondary">{section.description}</p>
                            </div>
                            <div className="text-foreground-muted">→</div>
                        </div>
                    </button>
                ))}
            </div>

            {/* Placeholder content */}
            <div className="card border-primary-500/20">
                <div className="flex flex-col items-center justify-center py-8 text-center">
                    <div className="p-4 rounded-2xl bg-primary-500/10 mb-4">
                        <Settings className="w-8 h-8 text-primary-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                        Einstellungen kommen bald
                    </h3>
                    <p className="text-foreground-secondary max-w-md">
                        Vollständige Konfiguration deines Profils, Benachrichtigungen und Integrationen.
                    </p>
                </div>
            </div>
        </div>
    );
}
