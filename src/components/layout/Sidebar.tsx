"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    CheckSquare,
    Calendar,
    Heart,
    BookOpen,
    Brain,
    Target,
    BarChart3,
    Settings,
    Menu,
    X,
    Sparkles,
    LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { logout } from "@/lib/actions/auth";

interface User {
    id?: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
}

interface SidebarProps {
    user?: User;
}

const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Habits", href: "/habits", icon: CheckSquare },
    { name: "Kalender", href: "/calendar", icon: Calendar },
    { name: "Gesundheit", href: "/health", icon: Heart },
    { name: "Journal", href: "/journal", icon: BookOpen },
    { name: "AI Insights", href: "/insights", icon: Brain },
    { name: "Goals", href: "/goals", icon: Target },
    { name: "Analytics", href: "/analytics", icon: BarChart3 },
];

const bottomNavigation = [
    { name: "Einstellungen", href: "/settings", icon: Settings },
];

export function Sidebar({ user }: SidebarProps) {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleLogout = async () => {
        await logout();
    };

    return (
        <>
            {/* Mobile menu button */}
            <button
                type="button"
                className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-lg bg-sidebar-bg text-sidebar-text"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile overlay */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={cn(
                    "fixed inset-y-0 left-0 z-40 w-64 bg-sidebar-bg flex flex-col transition-transform duration-300 lg:translate-x-0",
                    mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                {/* Logo */}
                <div className="flex items-center gap-3 px-6 py-5 border-b border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center energy-glow">
                        <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-white tracking-tight">
                            Life<span className="text-primary-400">OS</span>
                        </h1>
                        <p className="text-xs text-sidebar-text-muted">Dein Leben, optimiert</p>
                    </div>
                </div>

                {/* Main Navigation */}
                <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                                    isActive
                                        ? "bg-primary-600 text-white shadow-lg shadow-primary-600/30"
                                        : "text-sidebar-text hover:bg-sidebar-hover hover:text-white"
                                )}
                            >
                                <item.icon className={cn("w-5 h-5", isActive && "animate-pulse")} />
                                {item.name}
                                {item.name === "AI Insights" && (
                                    <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-accent-500/20 text-accent-400">
                                        AI
                                    </span>
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Bottom Navigation */}
                <div className="px-3 py-4 border-t border-white/10">
                    {bottomNavigation.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                                    isActive
                                        ? "bg-primary-600 text-white"
                                        : "text-sidebar-text-muted hover:bg-sidebar-hover hover:text-white"
                                )}
                            >
                                <item.icon className="w-5 h-5" />
                                {item.name}
                            </Link>
                        );
                    })}
                </div>

                {/* User Section */}
                <div className="px-3 py-4 border-t border-white/10">
                    <div className="flex items-center gap-3 px-3 py-2">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-white font-medium text-sm">
                            {user?.name?.charAt(0)?.toUpperCase() || user?.email?.charAt(0)?.toUpperCase() || "U"}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-white truncate">
                                {user?.name || "User"}
                            </p>
                            <p className="text-xs text-sidebar-text-muted truncate">
                                {user?.email || "Freier Plan"}
                            </p>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="p-1.5 rounded-lg hover:bg-sidebar-hover text-sidebar-text-muted hover:text-white transition-colors"
                            title="Abmelden"
                        >
                            <LogOut className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
}
