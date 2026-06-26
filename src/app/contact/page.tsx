import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "צור קשר | Relocation IL — ייעוץ לימודים והגירה",
  description: "השאירו פרטים לייעוץ חינם. נחזור אליכם תוך 24 שעות. טלפון, אימייל, וWhatsApp.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-l from-primary-dark to-primary py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            נשמח לשמוע ממך
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            השאר פרטים ונחזור אליך תוך 24 שעות עבודה. הייעוץ הראשוני בחינם.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <AnimatedSection className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    פרטי התקשרות
                  </h2>
                  <div className="space-y-5">
                    {[
                      {
                        icon: Phone,
                        title: "טלפון",
                        value: "050-XXX-XXXX",
                        href: "tel:+972500000000",
                      },
                      {
                        icon: Mail,
                        title: "אימייל",
                        value: "info@relocationil.com",
                        href: "mailto:info@relocationil.com",
                      },
                      {
                        icon: MessageCircle,
                        title: "WhatsApp",
                        value: "לחץ לשיחה",
                        href: "https://wa.me/972500000000",
                      },
                      {
                        icon: MapPin,
                        title: "מיקום",
                        value: "תל אביב, ישראל",
                        href: null,
                      },
                      {
                        icon: Clock,
                        title: "שעות פעילות",
                        value: "א׳-ה׳ 09:00-18:00",
                        href: null,
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted">{item.title}</p>
                          {item.href ? (
                            <a
                              href={item.href}
                              target={item.href.startsWith("http") ? "_blank" : undefined}
                              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                              className="font-semibold text-foreground hover:text-primary transition-colors cursor-pointer"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="font-semibold text-foreground">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why us mini */}
                <div className="bg-surface rounded-xl p-6 border border-border">
                  <h3 className="font-bold text-foreground mb-3">
                    למה Relocation IL?
                  </h3>
                  <ul className="space-y-2 text-sm text-muted">
                    <li className="flex items-center gap-2">
                      ✓ ייעוץ ראשוני חינם ללא התחייבות
                    </li>
                    <li className="flex items-center gap-2">
                      ✓ ליווי מקצועי מהשלב הראשון ועד ה-PR
                    </li>
                    <li className="flex items-center gap-2">
                      ✓ התמחות בישראלים — אנחנו מכירים את הצרכים שלך
                    </li>
                    <li className="flex items-center gap-2">
                      ✓ שותפות עם אוניברסיטאות מובילות
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection delay={200} className="lg:col-span-3">
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
