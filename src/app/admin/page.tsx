"use client";

import { useState, useEffect, useCallback } from "react";
import { Trash2, ChevronDown, Search, RefreshCw, LogOut } from "lucide-react";

interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  interest: string;
  notes: string;
  createdAt: string;
  status: "new" | "contacted" | "qualified" | "closed";
  adminNotes: string;
}

const STATUS_LABELS: Record<Lead["status"], string> = {
  new: "חדש",
  contacted: "נוצר קשר",
  qualified: "מתאים",
  closed: "סגור",
};

const STATUS_COLORS: Record<Lead["status"], string> = {
  new: "bg-blue-100 text-blue-800",
  contacted: "bg-yellow-100 text-yellow-800",
  qualified: "bg-green-100 text-green-800",
  closed: "bg-gray-100 text-gray-600",
};

const INTEREST_LABELS: Record<string, string> = {
  nz: "🇳🇿 ניו זילנד",
  au: "🇦🇺 אוסטרליה",
  both: "🌏 שתיהן",
  general: "❓ ייעוץ כללי",
};

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [authError, setAuthError] = useState(false);

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/leads", {
        headers: { "x-admin-password": password },
      });
      if (res.status === 401) {
        setIsAuthenticated(false);
        setAuthError(true);
        return;
      }
      const data = await res.json();
      setLeads(data);
    } catch {
      console.error("Failed to fetch leads");
    } finally {
      setLoading(false);
    }
  }, [password]);

  useEffect(() => {
    if (isAuthenticated) fetchLeads();
  }, [isAuthenticated, fetchLeads]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(false);
    const res = await fetch("/api/leads", {
      headers: { "x-admin-password": password },
    });
    if (res.ok) {
      setIsAuthenticated(true);
    } else {
      setAuthError(true);
    }
  };

  const updateLead = async (id: string, updates: Partial<Lead>) => {
    await fetch(`/api/leads/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "x-admin-password": password,
      },
      body: JSON.stringify(updates),
    });
    fetchLeads();
  };

  const deleteLead = async (id: string) => {
    if (!confirm("למחוק את הליד הזה?")) return;
    await fetch(`/api/leads/${id}`, {
      method: "DELETE",
      headers: { "x-admin-password": password },
    });
    fetchLeads();
  };

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      !searchQuery ||
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.phone.includes(searchQuery);
    const matchesStatus =
      statusFilter === "all" || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: leads.length,
    new: leads.filter((l) => l.status === "new").length,
    contacted: leads.filter((l) => l.status === "contacted").length,
    qualified: leads.filter((l) => l.status === "qualified").length,
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4" dir="rtl">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm">
          <h1 className="text-2xl font-bold text-center mb-2">🔐 ניהול לידים</h1>
          <p className="text-gray-500 text-center text-sm mb-6">
            הכנס סיסמת אדמין
          </p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="סיסמה"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-center text-lg"
              autoFocus
            />
            {authError && (
              <p className="text-red-500 text-sm text-center">
                סיסמה שגויה
              </p>
            )}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors"
            >
              כניסה
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold text-gray-900">📋 ניהול לידים</h1>
            <span className="text-sm text-gray-500">Relocation IL</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={fetchLeads}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              title="רענון"
            >
              <RefreshCw className={`w-5 h-5 ${loading ? "animate-spin" : ""}`} />
            </button>
            <button
              onClick={() => {
                setIsAuthenticated(false);
                setPassword("");
              }}
              className="p-2 text-gray-400 hover:text-red-500 transition-colors"
              title="יציאה"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "סה״כ", value: stats.total, color: "bg-gray-100 text-gray-700" },
            { label: "חדשים", value: stats.new, color: "bg-blue-50 text-blue-700" },
            { label: "נוצר קשר", value: stats.contacted, color: "bg-yellow-50 text-yellow-700" },
            { label: "מתאימים", value: stats.qualified, color: "bg-green-50 text-green-700" },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`${stat.color} rounded-xl p-4 text-center`}
            >
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="חיפוש לפי שם, אימייל או טלפון..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pr-10 pl-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </div>
          <div className="relative">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="appearance-none pl-8 pr-4 py-2.5 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              <option value="all">כל הסטטוסים</option>
              <option value="new">חדש</option>
              <option value="contacted">נוצר קשר</option>
              <option value="qualified">מתאים</option>
              <option value="closed">סגור</option>
            </select>
            <ChevronDown className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Leads List */}
        {filteredLeads.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <p className="text-gray-400 text-lg">
              {leads.length === 0 ? "אין לידים עדיין" : "אין תוצאות לחיפוש"}
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredLeads.map((lead) => (
              <div
                key={lead.id}
                className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-sm transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  {/* Lead info */}
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="font-bold text-lg text-gray-900">
                        {lead.name}
                      </h3>
                      <span
                        className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                          STATUS_COLORS[lead.status]
                        }`}
                      >
                        {STATUS_LABELS[lead.status]}
                      </span>
                      <span className="text-xs text-gray-400">
                        {INTEREST_LABELS[lead.interest] || lead.interest}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <a
                        href={`tel:${lead.phone}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        📞 {lead.phone}
                      </a>
                      <a
                        href={`mailto:${lead.email}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        ✉️ {lead.email}
                      </a>
                      <a
                        href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-600 transition-colors"
                      >
                        💬 WhatsApp
                      </a>
                      <span className="text-gray-400">
                        🕐 {new Date(lead.createdAt).toLocaleDateString("he-IL", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                    {lead.notes && (
                      <p className="text-sm text-gray-500 bg-gray-50 rounded-lg px-3 py-2">
                        💬 {lead.notes}
                      </p>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <select
                      value={lead.status}
                      onChange={(e) =>
                        updateLead(lead.id, {
                          status: e.target.value as Lead["status"],
                        })
                      }
                      className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="new">חדש</option>
                      <option value="contacted">נוצר קשר</option>
                      <option value="qualified">מתאים</option>
                      <option value="closed">סגור</option>
                    </select>
                    <button
                      onClick={() => deleteLead(lead.id)}
                      className="p-2 text-gray-300 hover:text-red-500 transition-colors"
                      title="מחיקה"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Admin Notes */}
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <input
                    type="text"
                    placeholder="הערות אדמין..."
                    defaultValue={lead.adminNotes}
                    onBlur={(e) => {
                      if (e.target.value !== lead.adminNotes) {
                        updateLead(lead.id, { adminNotes: e.target.value });
                      }
                    }}
                    className="w-full text-sm px-3 py-2 border border-transparent hover:border-gray-200 focus:border-blue-400 rounded-lg focus:outline-none transition-colors bg-transparent"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
