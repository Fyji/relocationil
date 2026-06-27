import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/images/logo.png"
                alt="Relocation IL"
                width={160}
                height={44}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed">
              ליווי מקצועי לישראלים במסלול לימודים והגירה לניו זילנד ואוסטרליה.
              מלווים אותך עד קבלת Offer of Place — כרטיס הכניסה שלך.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">ניווט</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "דף בית" },
                { href: "/new-zealand", label: "ניו זילנד" },
                { href: "/australia", label: "אוסטרליה" },
                { href: "/compare", label: "השוואה" },
                { href: "/process", label: "התהליך" },
                { href: "/faq", label: "שאלות נפוצות" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">שירותים</h3>
            <ul className="space-y-2 text-sm">
              <li>ייעוץ לימודים</li>
              <li>הגשת מועמדות</li>
              <li>ויזות והגירה</li>
              <li>ליווי משפחתי</li>
              <li>הכנה לנסיעה</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">צור קשר</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                <a href="mailto:relocationil.info@gmail.com" className="hover:text-white transition-colors">relocationil.info@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
                <span>תל אביב, ישראל</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm">
          <p>© {new Date().getFullYear()} Relocation IL. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
}
