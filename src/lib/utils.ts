import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes with clsx
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Format a date to a localized string
 */
export function formatDate(date: Date | string, options?: Intl.DateTimeFormatOptions): string {
    const d = typeof date === "string" ? new Date(date) : date;
    return d.toLocaleDateString("de-DE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        ...options,
    });
}

/**
 * Format a time to a localized string
 */
export function formatTime(date: Date | string): string {
    const d = typeof date === "string" ? new Date(date) : date;
    return d.toLocaleTimeString("de-DE", {
        hour: "2-digit",
        minute: "2-digit",
    });
}

/**
 * Get greeting based on current time
 */
export function getGreeting(): string {
    const hour = new Date().getHours();
    if (hour < 12) return "Guten Morgen";
    if (hour < 18) return "Guten Tag";
    return "Guten Abend";
}

/**
 * Calculate streak days
 */
export function calculateStreak(dates: Date[]): number {
    if (dates.length === 0) return 0;

    const sortedDates = dates
        .map(d => new Date(d).setHours(0, 0, 0, 0))
        .sort((a, b) => b - a);

    const today = new Date().setHours(0, 0, 0, 0);
    const yesterday = today - 86400000;

    if (sortedDates[0] !== today && sortedDates[0] !== yesterday) {
        return 0;
    }

    let streak = 1;
    for (let i = 1; i < sortedDates.length; i++) {
        const diff = sortedDates[i - 1] - sortedDates[i];
        if (diff === 86400000) {
            streak++;
        } else {
            break;
        }
    }

    return streak;
}

/**
 * Get energy score color class
 */
export function getEnergyColor(score: number): string {
    if (score >= 80) return "text-success-500";
    if (score >= 60) return "text-accent-500";
    if (score >= 40) return "text-warning-500";
    return "text-error-500";
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout | null = null;

    return (...args: Parameters<T>) => {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}
