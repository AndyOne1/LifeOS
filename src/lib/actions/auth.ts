"use server";

import { signIn, signOut } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: "/dashboard",
        });
    } catch (error) {
        // Handle auth errors
        if ((error as Error).message.includes("NEXT_REDIRECT")) {
            throw error; // Let Next.js handle the redirect
        }
        return { error: "Ungültige Anmeldedaten" };
    }
}

export async function register(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    // Validation
    if (!name || !email || !password) {
        return { error: "Alle Felder sind erforderlich" };
    }

    if (password.length < 8) {
        return { error: "Passwort muss mindestens 8 Zeichen haben" };
    }

    if (password !== confirmPassword) {
        return { error: "Passwörter stimmen nicht überein" };
    }

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
        where: { email },
    });

    if (existingUser) {
        return { error: "Ein Konto mit dieser E-Mail existiert bereits" };
    }

    // Create user
    const hashedPassword = await bcrypt.hash(password, 12);

    await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
            settings: {
                create: {
                    theme: "dark",
                    language: "de",
                },
            },
        },
    });

    // Auto sign in after registration
    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: "/dashboard",
        });
    } catch (error) {
        if ((error as Error).message.includes("NEXT_REDIRECT")) {
            throw error;
        }
        return { error: "Registrierung erfolgreich, aber Login fehlgeschlagen" };
    }
}

export async function logout() {
    await signOut({ redirectTo: "/" });
}
