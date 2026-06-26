import Image from "next/image";
import FlagIcon from "@/components/FlagIcon";
import {
  Globe2,
  DollarSign,
  Clock,
  GraduationCap,
  Briefcase,
  Home,
  Sun,
  Heart,
  Users,
  ArrowLeft,
  CheckCircle2,
  Phone,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const comparisonData = [
  {
    category: "משך ויזת לימודים",
    icon: Clock,
    nz: "עד 4 שנים",
    au: "עד 5 שנים",
  },
  {
    category: "עלות לימודים שנתית",
    icon: DollarSign,
    nz: "50,000 - 90,000 ₪",
    au: "60,000 - 110,000 ₪",
  },
  {
    category: "ויזת עבודה לאחר לימודים",
    icon: Briefcase,
    nz: "1-3 שנים (Post-Study Work Visa)",
    au: "2-4 שנים (Temporary Graduate Visa)",
  },
  {
    category: "מסלול לתושבות קבע (PR)",
    icon: Home,
    nz: "2-4 שנים מסיום הלימודים",
    au: "3-5 שנים מסיום הלימודים",
  },
  {
    category: "שכר ממוצע לבוגרים",
    icon: DollarSign,
    nz: "~200,000 ₪ בשנה",
    au: "~240,000 ₪ בשנה",
  },
  {
    category: "עבודה במהלך לימודים",
    icon: Briefcase,
    nz: "עד 20 שעות בשבוע",
    au: "ללא הגבלה (מ-2024)",
  },
  {
    category: "אקלים",
    icon: Sun,
    nz: "ממוזג, ירוק, 4 עונות",
    au: "חם-טרופי (משתנה לפי אזור)",
  },
  {
    category: "אוניברסיטאות מובילות",
    icon: GraduationCap,
    nz: "8 אוניברסיטאות (כולן מדורגות)",
    au: "43 אוניברסיטאות (Group of Eight)",
  },
  {
    category: "איכות חיים",
    icon: Heart,
    nz: "מקום 1-3 בעולם",
    au: "מקום 4-6 בעולם",
  },
  {
    category: "קהילה ישראלית",
    icon: Users,
    nz: "קהילה קטנה וחמה",
    au: "קהילה גדולה ומגוונת",
  },
  {
    category: "ביטוח בריאות",
    icon: Heart,
    nz: "נדרש ביטוח פרטי",
    au: "OSHC (חובה לסטודנטים)",
  },
  {
    category: "אופי החיים",
    icon: Globe2,
    nz: "רגוע, טבע, work-life balance",
    au: "דינמי, ערים גדולות, הזדמנויות",
  },
];

const profiles = [
  {
    title: "ניו זילנד מתאימה לך אם...",
    color: "nz",
    items: [
      "אתם מחפשים איכות חיים יוצאת דופן",
      "אתם אוהבים טבע ושקט",
      "חשוב לכם מסלול PR מהיר יחסית",
      "מעדיפים קהילה קטנה ואינטימית",
      "מחפשים עלויות נמוכות יותר",
      "רוצים סביבה בטוחה במיוחד לילדים",
    ],
  },
  {
    title: "אוסטרליה מתאימה לך אם...",
    color: "au",
    items: [
      "אתם מחפשים שוק עבודה גדול ומגוון",
      "חשובות לכם ערים גדולות ותוססות",
      "רוצים שכר גבוה יותר",
      "מעדיפים אקלים חם",
      "רוצים מגוון רחב של אוניברסיטאות",
      "חשובה לכם קהילה ישראלית גדולה",
    ],
  },
];

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-surface" dir="rtl">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-b from-primary-dark via-primary to-primary-light overflow-hidden">
        <div className="absolute inset-0 bg-primary-dark/40" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white">
          <AnimatedSection>
            <h1 className="text-3xl sm:text-5xl font-bold mb-6">
              ניו זילנד{" "}
              <span className="text-accent">מול</span>{" "}
              אוסטרליה
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
              השוואה מקיפה שתעזור לכם לבחור את היעד המושלם עבורכם ועבור המשפחה
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Country Images */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 -mt-12 relative z-20">
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/compare-nz.png"
                alt="ניו זילנד"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 right-4 text-white">
                <span className="text-2xl font-bold flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-nz inline-block" />
                  ניו זילנד <FlagIcon code="nz" size="1.2rem" />
                </span>
              </div>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/compare-au.png"
                alt="אוסטרליה"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 right-4 text-white">
                <span className="text-2xl font-bold flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-au inline-block" />
                  אוסטרליה <FlagIcon code="au" size="1.2rem" />
                </span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Comparison Table */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <AnimatedSection>
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-12">
            השוואה מפורטת
          </h2>
        </AnimatedSection>

        <div className="space-y-4">
          {/* Header */}
          <AnimatedSection>
            <div className="hidden md:grid grid-cols-3 gap-4 px-6 py-3">
              <div className="font-bold text-foreground text-lg">קטגוריה</div>
              <div className="font-bold text-nz text-lg text-center"><FlagIcon code="nz" size="1.2rem" /> ניו זילנד</div>
              <div className="font-bold text-au text-lg text-center"><FlagIcon code="au" size="1.2rem" /> אוסטרליה</div>
            </div>
          </AnimatedSection>

          {comparisonData.map((item, index) => (
            <AnimatedSection key={item.category} delay={index * 50}>
              <div className="bg-white rounded-xl shadow-sm border border-border p-4 md:p-6 md:grid md:grid-cols-3 gap-4 items-center hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3 md:mb-0">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-semibold text-foreground">{item.category}</span>
                </div>
                <div className="md:text-center mb-2 md:mb-0">
                  <span className="md:hidden font-medium text-nz"><FlagIcon code="nz" size="1rem" /> </span>
                  <span className="text-muted">{item.nz}</span>
                </div>
                <div className="md:text-center">
                  <span className="md:hidden font-medium text-au"><FlagIcon code="au" size="1rem" /> </span>
                  <span className="text-muted">{item.au}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Profile Recommendations */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-4">
              מה מתאים לכם?
            </h2>
            <p className="text-center text-muted mb-12 max-w-2xl mx-auto">
              כל אחד מהיעדים מציע יתרונות ייחודיים. הנה כמה נקודות שיעזרו לכם להחליט
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {profiles.map((profile, idx) => (
              <AnimatedSection key={profile.title} delay={idx * 100}>
                <div
                  className={`rounded-2xl p-8 border-2 ${
                    profile.color === "nz"
                      ? "border-nz/30 bg-nz/5"
                      : "border-au/30 bg-au/5"
                  }`}
                >
                  <h3
                    className={`text-xl font-bold mb-6 ${
                      profile.color === "nz" ? "text-nz" : "text-au"
                    }`}
                  >
                    {profile.title}
                  </h3>
                  <ul className="space-y-3">
                    {profile.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2
                          className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                            profile.color === "nz" ? "text-nz" : "text-au"
                          }`}
                        />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-b from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              לא בטוחים מה מתאים לכם?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              בשיחת ייעוץ חינמית נבנה יחד את התוכנית המושלמת עבורכם
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              לשיחת ייעוץ חינמית
              <ArrowLeft className="w-5 h-5" />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
