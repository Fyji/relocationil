import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "תהליך ההגירה — צעד אחר צעד לחיים חדשים",
  description:
    "איך עובד תהליך ההגירה לניו זילנד או אוסטרליה? 5 שלבים פשוטים: מייעוץ ראשוני ועד קבלת Offer of Place — כרטיס הכניסה שלך ללימודים ולחיים חדשים.",
  keywords: [
    "תהליך הגירה",
    "שלבי הגירה לניו זילנד",
    "שלבי הגירה לאוסטרליה",
    "ויזת סטודנט",
    "הרשמה לאוניברסיטה",
    "ייעוץ הגירה",
    "ליווי הגירה לישראלים",
  ],
  alternates: {
    canonical: "https://relocationil.com/process",
  },
  openGraph: {
    title: "תהליך ההגירה — צעד אחר צעד | Relocation IL",
    description:
      "6 שלבים פשוטים לחיים חדשים בניו זילנד או אוסטרליה.",
    url: "https://relocationil.com/process",
    images: ["/images/og-image.png"],
  },
};
import {
  Phone,
  ArrowLeft,
  MessageCircle,
  Route,
  FileText,
  Plane,
  HeartHandshake,
  Clock,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const steps = [
  {
    number: 1,
    title: "שיחת ייעוץ חינמית",
    subtitle: "הכירו אותנו",
    icon: MessageCircle,
    timeline: "30-60 דקות",
    description:
      "נכיר אתכם, נבין את הרקע שלכם, השאיפות והמצב המשפחתי. נבדוק התאמה ראשונית ונענה על כל השאלות.",
    includes: [
      "מיפוי מצב אישי ומשפחתי",
      "בדיקת התאמה למסלולי הגירה",
      "סקירת אפשרויות לימודים ותעסוקה",
      "הערכת לוחות זמנים ועלויות",
      "מענה לכל שאלה",
    ],
  },
  {
    number: 2,
    title: "בחירת מסלול",
    subtitle: "מתאימים לכם תוכנית",
    icon: Route,
    timeline: "1-2 שבועות",
    description:
      "בהתאם לפרופיל שלכם, נבנה תוכנית מותאמת אישית שכוללת יעד (ניו זילנד / אוסטרליה), מוסד לימודים, תוכנית ומסלול ויזה.",
    includes: [
      "בחירת יעד: ניו זילנד או אוסטרליה",
      "התאמת מוסד לימודים ותוכנית",
      "תכנון מסלול ויזה אופטימלי",
      "תכנון תקציבי מפורט",
      "לוח זמנים מותאם",
    ],
  },
  {
    number: 3,
    title: "הרשמה וויזה",
    subtitle: "מטפלים בכל הבירוקרטיה",
    icon: FileText,
    timeline: "2-4 חודשים",
    description:
      "אנחנו מטפלים בכל הניירת: הרשמה למוסד, הגשת בקשת ויזה, תרגומים, אישורים ומסמכים נדרשים.",
    includes: [
      "הרשמה למוסד הלימודים",
      "הכנת כל המסמכים הנדרשים",
      "הגשת מועמדות מסודרת",
      "ליווי עד לקבלת Offer of Place",
      "Offer of Place = כרטיס הכניסה שלך",
    ],
  },
  {
    number: 4,
    title: "הכנה ונסיעה",
    subtitle: "מכינים אתכם ליום הגדול",
    icon: Plane,
    timeline: "1-2 חודשים",
    description:
      "לאחר אישור הויזה, נכין אתכם לכל מה שצריך: מגורים, בנק, ביטוח, ציוד, ועוד.",
    includes: [
      "סיוע במציאת מגורים",
      "הנחיות לפתיחת חשבון בנק",
      "רשימת הכנה מפורטת לנסיעה",
      "קישור לקהילה הישראלית ביעד",
      "טיפים מעשיים לחיים בחו״ל",
    ],
  },
  {
    number: 5,
    title: "ליווי שוטף",
    subtitle: "אתם לא לבד",
    icon: HeartHandshake,
    timeline: "לאורך כל הדרך",
    description:
      "הליווי שלנו מסתיים עם קבלת ה-Offer of Place — מכתב הקבלה הרשמי מהמוסד, שמהווה את כרטיס הכניסה שלך ללימודים, לויזה ולחיים החדשים.",
    includes: [
      "Offer of Place — מכתב הקבלה הרשמי",
      "הבסיס להגשת ויזת סטודנט",
      "פותח את הדלת לויזת עבודה ו-PR",
      "ליווי מלא עד לרגע הקבלה",
      "כרטיס הכניסה שלך לחיים חדשים",
    ],
  },
];

const processFaq = [
  {
    q: "כמה זמן כל התהליך לוקח מתחילתו?",
    a: "בממוצע, מרגע שיחת הייעוץ הראשונה ועד קבלת Offer of Place — כ-4 עד 12 שבועות. התזמון תלוי במועדי הקבלה של המוסד ובמורכבות התיק.",
  },
  {
    q: "מה קורה אם לא מתקבלים למוסד?",
    a: "אנחנו מגישים בדרך כלל ל-2-3 מוסדות במקביל. אם אין קבלה, נמצא חלופה מתאימה או נתאים את התוכנית.",
  },
  {
    q: "האם אפשר להתחיל את התהליך מרחוק?",
    a: "בהחלט! כל התהליך מתבצע אונליין עד לשלב הנסיעה עצמה. שיחות זום, מסמכים דיגיטליים, והכל בקצב שלכם.",
  },
  {
    q: "מה אם משהו משתנה באמצע?",
    a: "חיים קורים. אנחנו גמישים ומתאימים את התוכנית לשינויים — בין אם זה שינוי יעד, דחיית מועד, או שינוי בהרכב המשפחתי.",
  },
  {
    q: "כמה עולה השירות?",
    a: "שיחת הייעוץ הראשונה חינמית לגמרי. על העלויות המלאות נדבר בשיחה בהתאם למסלול שייבחר. אין הפתעות.",
  },
];

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-surface" dir="rtl">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-b from-primary-dark via-primary to-primary-light overflow-hidden">
        <Image
          src="/images/students.png"
          alt="סטודנטים בקמפוס"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary-dark/40" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white">
          <AnimatedSection>
            <h1 className="text-3xl sm:text-5xl font-bold mb-6">
              התהליך שלנו —{" "}
              <span className="text-accent">צעד אחר צעד</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
              מהשיחה הראשונה ועד קבלת Offer of Place — כרטיס הכניסה שלך ללימודים
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute right-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary-light" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <AnimatedSection key={step.number} delay={index * 100}>
                <div className="relative md:pr-20">
                  {/* Step number circle */}
                  <div className="hidden md:flex absolute right-0 top-0 w-16 h-16 rounded-full bg-accent text-white items-center justify-center text-2xl font-bold shadow-lg z-10">
                    {step.number}
                  </div>

                  <div className="bg-white rounded-2xl shadow-sm border border-border p-6 sm:p-8 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="md:hidden w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-1">
                          <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                            {step.title}
                          </h3>
                          <span className="flex items-center gap-1 text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                            <Clock className="w-3.5 h-3.5" />
                            {step.timeline}
                          </span>
                        </div>
                        <p className="text-muted text-sm">{step.subtitle}</p>
                      </div>
                      <step.icon className="w-8 h-8 text-primary flex-shrink-0 hidden sm:block" />
                    </div>

                    <p className="text-muted mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">מה כלול:</h4>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {step.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                            <span className="text-sm text-muted">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Image Break */}
      <section className="relative h-64 sm:h-80">
        <Image
          src="/images/office-nz.png"
          alt="משרד בניו זילנד"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary-dark/50 flex items-center justify-center">
          <AnimatedSection>
            <p className="text-white text-2xl sm:text-3xl font-bold text-center px-4">
              כבר עזרנו למאות משפחות ישראליות להגשים את החלום
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Process FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <AnimatedSection>
          <div className="text-center mb-12">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              שאלות על התהליך
            </h2>
            <p className="text-muted">תשובות מהירות לשאלות הנפוצות ביותר</p>
          </div>
        </AnimatedSection>

        <div className="space-y-3">
          {processFaq.map((item, index) => (
            <AnimatedSection key={index} delay={index * 50}>
              <details className="group bg-white rounded-xl border border-border overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-5 hover:bg-surface/50 transition-colors list-none">
                  <span className="font-semibold text-foreground pr-2">{item.q}</span>
                  <ChevronDown className="w-5 h-5 text-muted flex-shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-5 pb-5 text-muted leading-relaxed border-t border-border/50 pt-4">
                  {item.a}
                </div>
              </details>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-b from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              מוכנים להתחיל?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              השלב הראשון הוא שיחת ייעוץ חינמית. בואו נדבר.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              קבעו שיחת ייעוץ חינמית
              <ArrowLeft className="w-5 h-5" />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
