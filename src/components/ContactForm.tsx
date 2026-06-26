"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-10 text-center">
        <CheckCircle2 className="w-16 h-16 text-secondary mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-foreground mb-2">תודה רבה!</h3>
        <p className="text-muted">
          קיבלנו את הפנייה שלך. ניצור איתך קשר תוך 24 שעות.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 space-y-5"
    >
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-foreground mb-1.5"
        >
          שם מלא <span className="text-destructive">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="השם המלא שלך"
          className="w-full h-12 px-4 rounded-lg border border-border bg-white text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all"
        />
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-foreground mb-1.5"
        >
          טלפון <span className="text-destructive">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          placeholder="050-0000000"
          className="w-full h-12 px-4 rounded-lg border border-border bg-white text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-foreground mb-1.5"
        >
          אימייל <span className="text-destructive">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="your@email.com"
          dir="ltr"
          className="w-full h-12 px-4 rounded-lg border border-border bg-white text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all text-left"
        />
      </div>

      {/* Interest */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-3">
          מעוניין/ת ב: <span className="text-destructive">*</span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          {[
            { value: "nz", label: "🇳🇿 ניו זילנד" },
            { value: "au", label: "🇦🇺 אוסטרליה" },
            { value: "both", label: "שתיהן" },
            { value: "unsure", label: "לא בטוח/ה" },
          ].map((option) => (
            <label
              key={option.value}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-border hover:border-accent hover:bg-accent/5 cursor-pointer transition-all text-sm font-medium has-[:checked]:border-accent has-[:checked]:bg-accent/10"
            >
              <input
                type="radio"
                name="interest"
                value={option.value}
                required
                className="sr-only"
              />
              {option.label}
            </label>
          ))}
        </div>
      </div>

      {/* Notes */}
      <div>
        <label
          htmlFor="notes"
          className="block text-sm font-medium text-foreground mb-1.5"
        >
          ספר/י לנו עוד (אופציונלי)
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          placeholder="מצב משפחתי, תחום עניין, שאלות..."
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-14 bg-accent hover:bg-accent-hover disabled:opacity-70 text-white font-bold text-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            שולח...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            שלח — ייעוץ ראשוני חינם
          </>
        )}
      </button>
    </form>
  );
}
