import Image from "next/image";
import {
  HelpCircle,
  ChevronDown,
  DollarSign,
  Globe2,
  Users,
  GraduationCap,
  Heart,
  Phone,
  ArrowLeft,
  MessageCircle,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const faqCategories = [
  {
    title: "שאלות כלליות",
    icon: MessageCircle,
    color: "primary",
    questions: [
      {
        q: "מה בדיוק אתם מציעים?",
        a: "אנחנו מלווים ישראלים בתהליך מלא של מעבר לחיים חדשים בניו זילנד או אוסטרליה דרך מסלול לימודים. מהייעוץ הראשוני, דרך בחירת מוסד ותוכנית, טיפול בוויזה, ועד ליווי שוטף אחרי ההגעה.",
      },
      {
        q: "למי השירות מתאים?",
        a: "לכל מי שרוצה לבנות חיים חדשים בניו זילנד או אוסטרליה — יחידים, זוגות ומשפחות. אין צורך ברקע אקדמי ספציפי. אנחנו מתאימים מסלול לכל פרופיל.",
      },
      {
        q: "מה ההבדל בינכם לבין עשייה עצמאית?",
        a: "אנחנו חוסכים לכם זמן, טעויות וכסף. יש לנו ניסיון עם מאות מקרים, קשרים ישירים עם מוסדות, וידע מעמיק בהליכי ויזה. טעות בהגשה יכולה לעלות חודשים של עיכוב.",
      },
      {
        q: "כמה זמן לוקח כל התהליך?",
        a: "בממוצע 4-8 חודשים מרגע שיחת הייעוץ ועד הנחיתה ביעד. התזמון תלוי במועדי קבלה של המוסד ובזמני עיבוד ויזה.",
      },
    ],
  },
  {
    title: "עלויות ומימון",
    icon: DollarSign,
    color: "accent",
    questions: [
      {
        q: "כמה עולים הלימודים?",
        a: "עלות הלימודים משתנה לפי מוסד ותוכנית. בניו זילנד: כ-50,000-90,000 ₪ לשנה. באוסטרליה: כ-60,000-110,000 ₪ לשנה. תוכניות מקצועיות (דיפלומה) בדרך כלל זולות יותר מתואר.",
      },
      {
        q: "האם יש מלגות?",
        a: "כן! ישנן מלגות ממוסדות הלימודים עצמם, מלגות ממשלתיות, ומלגות ייעודיות לסטודנטים בינלאומיים. אנחנו עוזרים לאתר ולהגיש בקשות למלגות רלוונטיות.",
      },
      {
        q: "כמה עולה השירות שלכם?",
        a: "שיחת הייעוץ הראשונה חינמית לגמרי וללא התחייבות. על עלויות הליווי המלא נדבר בשיחה בהתאם למסלול שייבחר. אנחנו שקופים לחלוטין בנושא עלויות.",
      },
      {
        q: "האם אפשר לעבוד במהלך הלימודים?",
        a: "כן! בניו זילנד מותר לעבוד עד 20 שעות בשבוע בזמן הלימודים ומשרה מלאה בחופשות. באוסטרליה אין הגבלת שעות (מ-2024). ההכנסה מסייעת משמעותית בכיסוי הוצאות מחיה.",
      },
      {
        q: "מה עלות המחיה?",
        a: "בניו זילנד: כ-5,000-7,000 ₪ לחודש לסטודנט בודד (ללא שכ״ד). באוסטרליה: כ-5,500-8,000 ₪. שכר דירה משתנה מאוד לפי עיר ואזור — נעזור לכם לתכנן תקציב מדויק.",
      },
    ],
  },
  {
    title: "ויזה והגירה",
    icon: Globe2,
    color: "nz",
    questions: [
      {
        q: "כמה זמן לוקח להוציא ויזה?",
        a: "ויזת סטודנט לניו זילנד: בדרך כלל 2-6 שבועות. לאוסטרליה: 4-8 שבועות. אנחנו מגישים הכל מסודר כדי למנות עיכובים, ומלווים את התהליך מול הרשויות.",
      },
      {
        q: "כמה זמן עד תושבות קבע (PR)?",
        a: "בניו זילנד: 2-4 שנים מסיום הלימודים, בתלות בניסיון תעסוקתי. באוסטרליה: 3-5 שנים. מסלול הלימודים הוא אחת הדרכים המהירות ביותר ל-PR.",
      },
      {
        q: "כמה זמן עד אזרחות?",
        a: "בניו זילנד: 5 שנים כתושב קבע. באוסטרליה: 4 שנים (כולל שנה כ-PR). שתי המדינות מאפשרות אזרחות כפולה.",
      },
      {
        q: "מה קורה אם הויזה נדחית?",
        a: "מקרה נדיר כשמגישים נכון. אם בכל זאת קורה, אנחנו מנתחים את הסיבה, מתקנים ומגישים מחדש או מתאימים מסלול חלופי. לא עוזבים אתכם.",
      },
    ],
  },
  {
    title: "משפחה וזוגיות",
    icon: Users,
    color: "accent",
    questions: [
      {
        q: "האם בן/בת הזוג יכול/ה לעבוד?",
        a: "כן! בשתי המדינות, בן/בת הזוג מקבלים ויזת עבודה פתוחה (Open Work Visa / Dependent Visa) שמאפשרת עבודה ללא הגבלה.",
      },
      {
        q: "מה עם הילדים? גן ובית ספר?",
        a: "ילדי סטודנטים זכאים ללימודים חינם בבתי ספר ציבוריים בניו זילנד (בתנאים מסוימים) ובאוסטרליה. מערכת החינוך בשתי המדינות ברמה גבוהה מאוד.",
      },
      {
        q: "האם אפשר להביא את ההורים?",
        a: "לא בשלב ויזת הסטודנט. לאחר קבלת PR, יש אפשרות להגיש ויזת הורים (Parent Visa) בשתי המדינות, אם כי מדובר בתהליך ארוך.",
      },
    ],
  },
  {
    title: "לימודים ואוניברסיטאות",
    icon: GraduationCap,
    color: "primary",
    questions: [
      {
        q: "האם צריך אנגלית ברמה גבוהה?",
        a: "נדרש ציון IELTS 5.5-6.5 (תלוי בתוכנית). אם הרמה לא מספיקה, יש קורסי הכנה לאנגלית במוסדות עצמם. אנחנו עוזרים גם בהכנה למבחן.",
      },
      {
        q: "אילו תחומי לימוד מומלצים?",
        a: "תחומים עם ביקוש גבוה שמקלים על קבלת PR: הנדסה, IT, סיעוד, חינוך, בנייה, חקלאות. אבל אפשר ללמוד כמעט כל דבר — נתאים לפי העדפה ומטרות.",
      },
      {
        q: "האם תואר מישראל מוכר?",
        a: "כן, תארים ישראליים מוכרים בדרך כלל. ייתכן שיידרש הליך הכרה רשמי (NZQA בניו זילנד, AQF באוסטרליה) — אנחנו מטפלים בזה.",
      },
    ],
  },
  {
    title: "חיים בחו״ל",
    icon: Heart,
    color: "nz",
    questions: [
      {
        q: "מה עם ביטוח בריאות?",
        a: "בניו זילנד: ביטוח בריאות פרטי חובה לסטודנטים (כ-2,000-3,000 ₪ לשנה). באוסטרליה: OSHC (ביטוח בריאות לסטודנטים) חובה. אנחנו מסייעים בבחירת התוכנית המתאימה.",
      },
      {
        q: "מה קורה אם לא מוצאים עבודה אחרי הלימודים?",
        a: "שתי המדינות נותנות ויזת עבודה אחרי הלימודים (1-4 שנים). אנחנו מלווים גם בשלב חיפוש העבודה — קורות חיים, הכנה לראיונות, ורשת קשרים.",
      },
      {
        q: "האם יש קהילה ישראלית?",
        a: "בהחלט! בשתי המדינות יש קהילות ישראליות פעילות עם מפגשים, חגים, וקבוצות תמיכה. אנחנו מחברים אתכם לקהילה עוד לפני ההגעה.",
      },
      {
        q: "האם קל להתרגל?",
        a: "ניו זילנד ואוסטרליה הן מדינות מסבירות פנים עם תרבות פתוחה ומכבדת. רוב הישראלים מתאקלמים תוך חודשים ספורים. הליווי שלנו כולל גם תמיכה בהתאקלמות.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-surface" dir="rtl">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-b from-primary-dark via-primary to-primary-light overflow-hidden">
        <div className="absolute inset-0 bg-primary-dark/40" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white">
          <AnimatedSection>
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold mb-6">
              שאלות{" "}
              <span className="text-accent">נפוצות</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
              ריכזנו את התשובות לשאלות שאתם הכי שואלים. לא מצאתם תשובה? דברו איתנו.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="space-y-12">
          {faqCategories.map((category, catIndex) => (
            <AnimatedSection key={category.title} delay={catIndex * 50}>
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-lg bg-${category.color}/10 flex items-center justify-center`}>
                    <category.icon className={`w-5 h-5 text-${category.color}`} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                    {category.title}
                  </h2>
                </div>

                {/* Questions */}
                <div className="space-y-3">
                  {category.questions.map((item, qIndex) => (
                    <details
                      key={qIndex}
                      className="group bg-white rounded-xl border border-border overflow-hidden"
                    >
                      <summary className="flex items-center justify-between cursor-pointer p-5 hover:bg-surface/50 transition-colors list-none">
                        <span className="font-semibold text-foreground pr-2 text-right">
                          {item.q}
                        </span>
                        <ChevronDown className="w-5 h-5 text-muted flex-shrink-0 transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="px-5 pb-5 text-muted leading-relaxed border-t border-border/50 pt-4">
                        {item.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Still have questions CTA */}
      <section className="py-16 bg-gradient-to-b from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              עדיין יש שאלות?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              אין בעיה! בשיחת ייעוץ חינמית נענה על כל שאלה ונתאים לכם תוכנית אישית
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
