"use client";

import { Bell, Search, Moon, Sun } from "lucide-react";
import { cn, getGreeting } from "@/lib/utils";
import { useTheme } from "@/components/providers";
import { useEffect, useState } from "react";

export function Header() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [greeting, setGreeting] = useState("");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        setGreeting(getGreeting());
    }, []);

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };

    return (
        <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-lg border-b border-border">
            <div className="flex items-center justify-between h-16 px-4 lg:px-6">
                {/* Left side - Greeting (hidden on mobile due to menu button) */}
                <div className="hidden lg:block">
                    <p className="text-sm text-foreground-secondary">{greeting}</p>
                    <h2 className="text-lg font-semibold text-foreground">
                        Willkommen zurück! 👋
                    </h2>
                </div>

                {/* Spacer for mobile */}
                <div className="lg:hidden w-12" />

                {/* Right side - Actions */}
                <div className="flex items-center gap-2">
                    {/* Search */}
                    <div className="hidden md:flex items-center">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground-muted" />
                            <input
                                type="text"
                                placeholder="Suchen..."
                                className="input pl-10 w-64 bg-background-secondary"
                            />
                        </div>
                    </div>

                    {/* Mobile search button */}
                    <button
                        type="button"
                        className="md:hidden p-2 rounded-lg hover:bg-background-tertiary text-foreground-secondary"
                    >
                        <Search className="w-5 h-5" />
                    </button>

                    {/* Dark mode toggle */}
                    <button
                        type="button"
                        onClick={toggleTheme}
                        className={cn(
                            "p-2 rounded-lg transition-colors",
                            "hover:bg-background-tertiary text-foreground-secondary hover:text-foreground"
                        )}
                        aria-label="Toggle dark mode"
                    >
                        {mounted && resolvedTheme === "dark" ? (
                            <Sun className="w-5 h-5" />
                        ) : (
                            <Moon className="w-5 h-5" />
                        )}
                    </button>

                    {/* Notifications */}
                    <button
                        type="button"
                        className={cn(
                            "relative p-2 rounded-lg transition-colors",
                            "hover:bg-background-tertiary text-foreground-secondary hover:text-foreground"
                        )}
                        aria-label="Notifications"
                    >
                        <Bell className="w-5 h-5" />
                        {/* Notification badge */}
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-error-500" />
                    </button>
                </div>
            </div>
        </header>
    );
}
