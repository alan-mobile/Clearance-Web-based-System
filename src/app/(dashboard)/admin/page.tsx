"use client";

import { LayoutDashboard } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-surface-warm">
      {/* Header */}
      <header className="bg-white border-b border-border-warm">
        <div className="px-6 py-5">
          <p className="text-sm text-warm-muted">System Administration</p>
          <h1 className="text-2xl font-display font-bold text-cjc-navy">
            Admin Dashboard
          </h1>
        </div>
      </header>

      <div className="flex flex-col items-center justify-center p-6 min-h-[60vh]">
        <div className="text-center">
          <div className="w-20 h-20 rounded-full bg-cjc-blue/10 flex items-center justify-center mx-auto mb-6">
            <LayoutDashboard className="w-10 h-10 text-cjc-blue" />
          </div>
          <h2 className="text-2xl font-display font-bold text-cjc-navy mb-2">
            Coming Soon
          </h2>
          <p className="text-warm-muted max-w-md">
            The admin dashboard is currently under development. Advanced analytics and system monitoring features will be available here soon.
          </p>
        </div>
      </div>
    </div>
  );
}
