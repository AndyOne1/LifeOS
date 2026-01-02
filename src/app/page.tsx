import Link from "next/link";
import {
  Sparkles,
  CheckSquare,
  Heart,
  Brain,
  BarChart3,
  ArrowRight,
  Zap,
  Shield,
  Smartphone,
} from "lucide-react";

const features = [
  {
    icon: CheckSquare,
    title: "Habit Tracking",
    description: "Tracke deine Gewohnheiten mit Streaks, Heatmaps und AI-Coaching.",
  },
  {
    icon: Heart,
    title: "Gesundheit",
    description: "Medikamente, Symptome, Vitaldaten – alles an einem Ort.",
  },
  {
    icon: Brain,
    title: "AI Insights",
    description: "Erhalte personalisierte Empfehlungen basierend auf deinen Daten.",
  },
  {
    icon: BarChart3,
    title: "Korrelationen",
    description: "Entdecke Zusammenhänge zwischen Schlaf, Habits und Stimmung.",
  },
];

const highlights = [
  {
    icon: Zap,
    title: "Energie-Score",
    description: "Starte jeden Tag mit einem AI-berechneten Tagesform-Indikator.",
  },
  {
    icon: Shield,
    title: "Datenschutz",
    description: "Deine Daten gehören dir. Volle Kontrolle, kein Tracking.",
  },
  {
    icon: Smartphone,
    title: "Überall verfügbar",
    description: "Web-App mit PWA-Support für mobile Nutzung.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-background to-accent-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-500/10 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <nav className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center energy-glow">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Life<span className="text-primary-400">OS</span>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/login"
                className="text-sm font-medium text-foreground-secondary hover:text-foreground transition-colors"
              >
                Anmelden
              </Link>
              <Link href="/dashboard" className="btn btn-primary">
                Loslegen
              </Link>
            </div>
          </nav>

          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-8">
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-primary-300">Dein intelligenter Lebenspartner</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Optimiere dein Leben mit{" "}
              <span className="gradient-text">AI-gestützten Insights</span>
            </h1>

            <p className="text-lg sm:text-xl text-foreground-secondary mb-10 max-w-2xl mx-auto">
              LifeOS analysiert die Zusammenhänge zwischen deinen Gewohnheiten, deiner Gesundheit
              und deiner Stimmung – für personalisierte Empfehlungen, die wirklich wirken.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/dashboard" className="btn btn-primary text-base px-8 py-3">
                Kostenlos starten
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#features"
                className="btn btn-secondary text-base px-8 py-3"
              >
                Mehr erfahren
              </Link>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
            <div className="rounded-2xl border border-border bg-background-secondary p-4 shadow-2xl shadow-primary-500/10">
              <div className="rounded-xl bg-background p-6 grid grid-cols-4 gap-4">
                {/* Mini stat cards */}
                {["78%", "12 Tage", "5/7", "7.5h"].map((value, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-background-secondary border border-border text-center"
                  >
                    <div className="text-2xl font-bold gradient-text">{value}</div>
                    <div className="text-xs text-foreground-muted mt-1">
                      {["Energie", "Streak", "Habits", "Schlaf"][i]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Alles was du brauchst
            </h2>
            <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
              Keine separaten Apps mehr. LifeOS vereint Habit Tracking, Gesundheit, Kalender und
              KI-Insights in einer Plattform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="card group hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-primary-500/10 w-fit mb-4 group-hover:bg-primary-500/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-foreground-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {highlights.map((highlight) => (
              <div key={highlight.title} className="flex gap-4">
                <div className="p-3 rounded-xl bg-accent-500/10 h-fit">
                  <highlight.icon className="w-6 h-6 text-accent-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{highlight.title}</h3>
                  <p className="text-foreground-secondary">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary-900/30 via-background to-accent-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Bereit, dein Leben zu optimieren?
          </h2>
          <p className="text-lg text-foreground-secondary mb-8">
            Starte jetzt kostenlos und entdecke, was LifeOS für dich tun kann.
          </p>
          <Link href="/dashboard" className="btn btn-primary text-base px-8 py-3">
            Jetzt kostenlos starten
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary-400" />
              <span className="font-semibold text-foreground">LifeOS</span>
            </div>
            <p className="text-sm text-foreground-muted">
              © 2026 LifeOS. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
