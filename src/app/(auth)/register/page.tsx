"use client";

import Link from "next/link";
import { useState } from "react";
import { Sparkles, Mail, Lock, User, ArrowRight, Loader2 } from "lucide-react";
import { register } from "@/lib/actions/auth";

export default function RegisterPage() {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(formData: FormData) {
        setLoading(true);
        setError(null);

        const result = await register(formData);

        if (result?.error) {
            setError(result.error);
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-background to-accent-900/20" />

            <div className="relative w-full max-w-md">
                {/* Logo */}
                <div className="flex items-center justify-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center energy-glow">
                        <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-2xl font-bold text-foreground">
                        Life<span className="text-primary-400">OS</span>
                    </span>
                </div>

                {/* Card */}
                <div className="card">
                    <h1 className="text-2xl font-bold text-foreground text-center mb-2">
                        Konto erstellen
                    </h1>
                    <p className="text-foreground-secondary text-center mb-6">
                        Starte jetzt mit LifeOS
                    </p>

                    {error && (
                        <div className="mb-4 p-3 rounded-lg bg-error-500/10 border border-error-500/20 text-error-500 text-sm">
                            {error}
                        </div>
                    )}

                    <form action={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                                Name
                            </label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-muted" />
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    placeholder="Dein Name"
                                    className="input pl-11"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                                E-Mail
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-muted" />
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="deine@email.de"
                                    className="input pl-11"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-foreground mb-1.5">
                                Passwort
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-muted" />
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    minLength={8}
                                    placeholder="Mindestens 8 Zeichen"
                                    className="input pl-11"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-foreground mb-1.5">
                                Passwort bestätigen
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-muted" />
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    required
                                    minLength={8}
                                    placeholder="Passwort wiederholen"
                                    className="input pl-11"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="btn btn-primary w-full py-3"
                        >
                            {loading ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                                <>
                                    Registrieren
                                    <ArrowRight className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-foreground-secondary text-sm">
                            Bereits ein Konto?{" "}
                            <Link href="/login" className="text-primary-400 hover:text-primary-300 font-medium">
                                Anmelden
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Back to home */}
                <div className="mt-6 text-center">
                    <Link href="/" className="text-sm text-foreground-muted hover:text-foreground transition-colors">
                        ← Zurück zur Startseite
                    </Link>
                </div>
            </div>
        </div>
    );
}
