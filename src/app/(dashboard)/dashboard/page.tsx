"use client";

import {
    Zap,
    TrendingUp,
    CheckCircle2,
    AlertTriangle,
    Flame,
    Droplets,
    Brain,
    Moon,
    Plus,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Demo data - will be replaced with real data
const energyScore = 78;
const streakDays = 12;
const completedToday = 5;
const totalHabitsToday = 7;

const quickStats = [
    {
        label: "Energie-Score",
        value: `${energyScore}%`,
        icon: Zap,
        color: "text-accent-400",
        bgColor: "bg-accent-500/10",
    },
    {
        label: "Streak",
        value: `${streakDays} Tage`,
        icon: Flame,
        color: "text-warning-500",
        bgColor: "bg-warning-500/10",
    },
    {
        label: "Habits heute",
        value: `${completedToday}/${totalHabitsToday}`,
        icon: CheckCircle2,
        color: "text-success-500",
        bgColor: "bg-success-500/10",
    },
    {
        label: "Schlaf",
        value: "7.5h",
        icon: Moon,
        color: "text-primary-400",
        bgColor: "bg-primary-500/10",
    },
];

const todayHabits = [
    { id: 1, name: "Meditation", icon: Brain, completed: true, streak: 12 },
    { id: 2, name: "Wasser trinken", icon: Droplets, completed: true, progress: 6, goal: 8 },
    { id: 3, name: "Training", icon: TrendingUp, completed: false, streak: 5 },
    { id: 4, name: "Lesen", icon: Brain, completed: true, streak: 3 },
];

const aiInsight = {
    title: "Dein Energie-Peak ist um 10 Uhr",
    description: "Basierend auf deinen Daten der letzten 2 Wochen: Du bist morgens am produktivsten. Plane wichtige Aufgaben zwischen 9-11 Uhr.",
    type: "tip" as const,
};

const upcomingEvents = [
    { id: 1, title: "Team Meeting", time: "10:00", color: "bg-primary-500" },
    { id: 2, title: "Arzttermin", time: "14:30", color: "bg-accent-500" },
    { id: 3, title: "Training", time: "18:00", color: "bg-success-500" },
];

export default function DashboardPage() {
    return (
        <div className="space-y-6 animate-fade-in">
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {quickStats.map((stat) => (
                    <div
                        key={stat.label}
                        className="card group hover:scale-[1.02] transition-transform duration-200"
                    >
                        <div className="flex items-center gap-3">
                            <div className={cn("p-2.5 rounded-xl", stat.bgColor)}>
                                <stat.icon className={cn("w-5 h-5", stat.color)} />
                            </div>
                            <div>
                                <p className="text-sm text-foreground-secondary">{stat.label}</p>
                                <p className="text-xl font-bold text-foreground">{stat.value}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-3 gap-6">
                {/* Left Column - Habits */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Today's Habits */}
                    <div className="card">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-foreground">Habits heute</h3>
                            <button className="btn btn-ghost text-sm">
                                <Plus className="w-4 h-4" />
                                Neues Habit
                            </button>
                        </div>
                        <div className="space-y-3">
                            {todayHabits.map((habit) => (
                                <div
                                    key={habit.id}
                                    className={cn(
                                        "flex items-center gap-4 p-3 rounded-xl transition-all duration-200",
                                        habit.completed
                                            ? "bg-success-500/5 border border-success-500/20"
                                            : "bg-background-tertiary hover:bg-border"
                                    )}
                                >
                                    <button
                                        className={cn(
                                            "w-10 h-10 rounded-xl flex items-center justify-center transition-all",
                                            habit.completed
                                                ? "bg-success-500 text-white"
                                                : "bg-background-secondary border border-border hover:border-primary-500"
                                        )}
                                    >
                                        <habit.icon className="w-5 h-5" />
                                    </button>
                                    <div className="flex-1">
                                        <p
                                            className={cn(
                                                "font-medium",
                                                habit.completed ? "text-success-500" : "text-foreground"
                                            )}
                                        >
                                            {habit.name}
                                        </p>
                                        <p className="text-xs text-foreground-muted">
                                            {habit.progress
                                                ? `${habit.progress}/${habit.goal} Gläser`
                                                : `🔥 ${habit.streak} Tage Streak`}
                                        </p>
                                    </div>
                                    {habit.completed && (
                                        <CheckCircle2 className="w-5 h-5 text-success-500" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* AI Insight Card */}
                    <div className="card border-primary-500/30 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5">
                        <div className="flex gap-4">
                            <div className="p-3 rounded-xl bg-primary-500/10 h-fit">
                                <Brain className="w-6 h-6 text-primary-400" />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <h4 className="font-semibold text-foreground">{aiInsight.title}</h4>
                                    <span className="badge badge-primary">AI Insight</span>
                                </div>
                                <p className="text-sm text-foreground-secondary">{aiInsight.description}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Events & Warnings */}
                <div className="space-y-6">
                    {/* Upcoming Events */}
                    <div className="card">
                        <h3 className="text-lg font-semibold text-foreground mb-4">Heute</h3>
                        <div className="space-y-3">
                            {upcomingEvents.map((event) => (
                                <div key={event.id} className="flex items-center gap-3">
                                    <div className={cn("w-1 h-10 rounded-full", event.color)} />
                                    <div className="flex-1">
                                        <p className="font-medium text-foreground">{event.title}</p>
                                        <p className="text-sm text-foreground-muted">{event.time} Uhr</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Risk Warning */}
                    <div className="card border-warning-500/30 bg-warning-500/5">
                        <div className="flex gap-3">
                            <div className="p-2 rounded-lg bg-warning-500/10 h-fit">
                                <AlertTriangle className="w-5 h-5 text-warning-500" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-foreground mb-1">Achtung</h4>
                                <p className="text-sm text-foreground-secondary">
                                    3 Meetings + Training geplant bei niedrigem Schlaf. Erwäge, das Training auf morgen
                                    zu verschieben.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Energy Score Visualization */}
                    <div className="card">
                        <h3 className="text-lg font-semibold text-foreground mb-4">Energie heute</h3>
                        <div className="flex items-center justify-center">
                            <div className="relative w-32 h-32">
                                {/* Background circle */}
                                <svg className="w-full h-full -rotate-90">
                                    <circle
                                        cx="64"
                                        cy="64"
                                        r="56"
                                        stroke="currentColor"
                                        strokeWidth="12"
                                        fill="none"
                                        className="text-background-tertiary"
                                    />
                                    <circle
                                        cx="64"
                                        cy="64"
                                        r="56"
                                        stroke="url(#energyGradient)"
                                        strokeWidth="12"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeDasharray={`${(energyScore / 100) * 352} 352`}
                                        className="transition-all duration-1000"
                                    />
                                    <defs>
                                        <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#6366f1" />
                                            <stop offset="100%" stopColor="#14b8a6" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                {/* Center text */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-3xl font-bold gradient-text">{energyScore}</span>
                                    <span className="text-sm text-foreground-muted">Punkte</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-center text-sm text-foreground-secondary mt-4">
                            Deine Energie ist heute <span className="text-accent-400 font-medium">gut</span> 💪
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
