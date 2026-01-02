import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Sidebar, Header } from "@/components/layout";

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();

    if (!session?.user) {
        redirect("/login");
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Sidebar */}
            <Sidebar user={session.user} />

            {/* Main content area */}
            <div className="lg:pl-64">
                {/* Header */}
                <Header user={session.user} />

                {/* Page content */}
                <main className="p-4 lg:p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
