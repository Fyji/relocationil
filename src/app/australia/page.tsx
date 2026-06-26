import Image from "next/image";
import FlagIcon from "@/components/FlagIcon";
import {
  GraduationCap,
  Briefcase,
  Home,
  Shield,
  Users,
  TrendingUp,
  Heart,
  Globe2,
  Leaf,
  DollarSign,
  CheckCircle2,
  ArrowLeft,
  BookOpen,
  Award,
  Phone,
  Star,
  FlaskConical,
  Code,
  BarChart3,
  Cpu,
  Building2,
  MapPin,
  Clock,
  FileCheck,
  Target,
  Lightbulb,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function AustraliaPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-yellow-900 via-yellow-800 to-yellow-700 overflow-hidden">
        <Image
          src="/images/au-hero.png"
          alt="אוסטרליה — לימודים והגירה לישראלים"
          fill
          className="object-cover opacity-25"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/70 via-yellow-800/60 to-yellow-700/50" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white py-20">
          <div className="text-6xl mb-6"><FlagIcon code="au" size="3.5rem" /></div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            לימודים באוסטרליה
            <br />
            <span className="text-au">המסלול שלך להגירה</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            אוניברסיטאות מהמובילות בעולם, שכר גבוה, איכות חיים יוצאת דופן
            <br />
            ומסלול הגירה ברור ומוכח — לך ולמשפחה
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-lg cursor-pointer"
            >
              <Phone className="w-5 h-5" />
              בדוק התאמה בחינם
            </a>
            <a
              href="#universities"
              className="inline-flex items-center gap-2 border-2 border-white/50 hover:border-white text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 cursor-pointer"
            >
              גלה את האוניברסיטאות
              <ArrowLeft className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { icon: Briefcase, text: "2-4 שנות ויזת עבודה" },
              { icon: Users, text: "בן/בת זוג עובד/ת" },
              { icon: DollarSign, text: "שכר AUD 90K+" },
              { icon: Shield, text: "מסלול PR מוכח" },
            ].map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 text-sm"
              >
                <badge.icon className="w-5 h-5 text-au flex-shrink-0" />
                <span className="text-white/90">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TOP 5 UNIVERSITIES ===== */}
      <section id="universities" className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                🏛️ טופ 5 האוניברסיטאות באוסטרליה
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                אוסטרליה מציעה כמה מהאוניברסיטאות הטובות בעולם — חברות ב-Group of Eight היוקרתי
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            {/* University of Melbourne */}
            <AnimatedSection delay={0}>
              <div className="bg-white rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="border-r-4 border-au p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-au/10 rounded-xl flex items-center justify-center">
                        <Star className="w-8 h-8 text-au" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">
                          University of Melbourne
                        </h3>
                        <span className="bg-au/10 text-au font-bold text-sm px-3 py-1 rounded-full">
                          QS #14
                        </span>
                      </div>
                      <p className="text-muted leading-relaxed mb-4">
                        האוניברסיטה המובילה באוסטרליה ואחת הטובות בעולם. נוסדה ב-1853, ממוקמת בלב מלבורן — העיר שנבחרה שוב ושוב כאחת הערים הכי טובות לגור בהן בעולם. ידועה במודל ה-Melbourne Model הייחודי שמדגיש רוחב אקדמי לפני התמחות.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["הנדסה", "מדעי המחשב", "רפואה", "משפטים", "עסקים (MBA)", "אדריכלות"].map(
                          (faculty) => (
                            <span
                              key={faculty}
                              className="bg-surface text-foreground/70 text-xs px-3 py-1 rounded-full border border-border"
                            >
                              {faculty}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* University of Sydney */}
            <AnimatedSection delay={100}>
              <div className="bg-white rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="border-r-4 border-au p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-au/10 rounded-xl flex items-center justify-center">
                        <Award className="w-8 h-8 text-au" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">
                          University of Sydney
                        </h3>
                        <span className="bg-au/10 text-au font-bold text-sm px-3 py-1 rounded-full">
                          QS #18
                        </span>
                      </div>
                      <p className="text-muted leading-relaxed mb-4">
                        האוניברסיטה הוותיקה ביותר באוסטרליה (1850), ממוקמת בעיר הגדולה ביותר ביבשת. קמפוס מרהיב בסגנון גותי וחיבור חזק לתעשייה. ידועה במיוחד בתחומי הבריאות, ההנדסה והמשפטים. בוגריה כוללים 5 ראשי ממשלה אוסטרליים.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["הנדסה", "מדעי הבריאות", "משפטים", "עסקים", "מדעי המחשב", "חינוך"].map(
                          (faculty) => (
                            <span
                              key={faculty}
                              className="bg-surface text-foreground/70 text-xs px-3 py-1 rounded-full border border-border"
                            >
                              {faculty}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* UNSW Sydney */}
            <AnimatedSection delay={200}>
              <div className="bg-white rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="border-r-4 border-au p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-au/10 rounded-xl flex items-center justify-center">
                        <Cpu className="w-8 h-8 text-au" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">
                          UNSW Sydney
                        </h3>
                        <span className="bg-au/10 text-au font-bold text-sm px-3 py-1 rounded-full">
                          QS #19
                        </span>
                      </div>
                      <p className="text-muted leading-relaxed mb-4">
                        University of New South Wales — אוניברסיטה מובילה בטכנולוגיה, הנדסה ועסקים. חיבור חזק מאוד לתעשיית ההייטק והסטארטאפים באוסטרליה. ממוקמת בסידני עם קמפוס מודרני. ידועה כ&quot;אוניברסיטת ההייטק&quot; של אוסטרליה עם שיעור העסקה גבוה מאוד לבוגרים.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["הנדסה", "מדעי המחשב", "Data Science", "עסקים", "אנרגיה מתחדשת", "פוטוולטאיקה"].map(
                          (faculty) => (
                            <span
                              key={faculty}
                              className="bg-surface text-foreground/70 text-xs px-3 py-1 rounded-full border border-border"
                            >
                              {faculty}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Australian National University */}
            <AnimatedSection delay={300}>
              <div className="bg-white rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="border-r-4 border-au p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-au/10 rounded-xl flex items-center justify-center">
                        <FlaskConical className="w-8 h-8 text-au" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">
                          Australian National University (ANU)
                        </h3>
                        <span className="bg-au/10 text-au font-bold text-sm px-3 py-1 rounded-full">
                          QS #30
                        </span>
                      </div>
                      <p className="text-muted leading-relaxed mb-4">
                        האוניברסיטה הלאומית של אוסטרליה, ממוקמת בבירה קנברה. מובילה עולמית במחקר — 6 זוכי פרס נובל בין חבריה. מצוינת במיוחד במדעים מדויקים, מדעי החברה ומדיניות ציבורית. יחס מרצים-סטודנטים נמוך שמאפשר חוויה אקדמית אישית.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["מדעים מדויקים", "יחסים בינלאומיים", "מדיניות ציבורית", "מדעי המחשב", "אסטרונומיה", "כלכלה"].map(
                          (faculty) => (
                            <span
                              key={faculty}
                              className="bg-surface text-foreground/70 text-xs px-3 py-1 rounded-full border border-border"
                            >
                              {faculty}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Monash University */}
            <AnimatedSection delay={400}>
              <div className="bg-white rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="border-r-4 border-au p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-au/10 rounded-xl flex items-center justify-center">
                        <Globe2 className="w-8 h-8 text-au" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">
                          Monash University
                        </h3>
                        <span className="bg-au/10 text-au font-bold text-sm px-3 py-1 rounded-full">
                          QS #37
                        </span>
                      </div>
                      <p className="text-muted leading-relaxed mb-4">
                        האוניברסיטה הגדולה ביותר באוסטרליה עם נוכחות גלובלית — קמפוסים במלבורן, מלזיה ודרום אפריקה. מצוינת בפארמקולוגיה (#1 בעולם), רפואה והנדסה. חיבור חזק לתעשייה עם תוכניות התמחות מובנות בתואר.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["פארמקולוגיה", "רפואה", "הנדסה", "IT", "חינוך", "עיצוב"].map(
                          (faculty) => (
                            <span
                              key={faculty}
                              className="bg-surface text-foreground/70 text-xs px-3 py-1 rounded-full border border-border"
                            >
                              {faculty}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== MASTER'S PROGRAMS ===== */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                🎓 תואר שני באוסטרליה
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                תוכניות מאסטר מובילות שפותחות דלת להגירה — ההשקעה שמחזירה את עצמה
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Code,
                title: "מדעי המחשב ו-IT",
                duration: "1.5-2 שנים",
                cost: "AUD 45,000-55,000 לשנה",
                desc: "תחום עם ביקוש עצום באוסטרליה. מופיע ב-Skills Priority List. כולל התמחויות ב-AI, Cyber Security, Cloud Computing. בונוס STEM לויזת עבודה.",
                immigration: "בונוס 2 שנים לויזת עבודה (STEM)",
              },
              {
                icon: BarChart3,
                title: "Data Science & Analytics",
                duration: "1.5-2 שנים",
                cost: "AUD 42,000-50,000 לשנה",
                desc: "שילוב של סטטיסטיקה, תכנות ולמידת מכונה. מקצוע חם עם שכר ממוצע AUD 120K+. אוניברסיטאות מובילות: Melbourne, UNSW, Monash.",
                immigration: "מקצוע בביקוש ב-SOL",
              },
              {
                icon: Cpu,
                title: "הנדסה",
                duration: "2 שנים",
                cost: "AUD 45,000-55,000 לשנה",
                desc: "הנדסת תוכנה, חשמל, מכונות ואזרחית. תוכניות מוכרות על ידי Engineers Australia. שוק עבודה חזק במיוחד בתחום התשתיות.",
                immigration: "מקצוע ב-Priority Migration SOL",
              },
              {
                icon: TrendingUp,
                title: "MBA & עסקים",
                duration: "1.5-2 שנים",
                cost: "AUD 50,000-80,000 לשנה",
                desc: "תוכניות MBA מהמובילות באזור אסיה-פסיפיק. Melbourne Business School ו-AGSM (UNSW) בדירוג עולמי. רשת קשרים אדירה.",
                immigration: "ויזת עבודה 2 שנים + ניסיון ניהולי",
              },
              {
                icon: Heart,
                title: "בריאות וסיעוד",
                duration: "2 שנים",
                cost: "AUD 35,000-50,000 לשנה",
                desc: "ביקוש עצום לאנשי מקצוע בתחום הבריאות. סיעוד, פיזיותרפיה, ריפוי בעיסוק. מסלול מהיר לתושבות קבועה דרך רשימות העדיפות.",
                immigration: "מסלול PR מהיר — מקצוע בעדיפות גבוהה",
              },
              {
                icon: Building2,
                title: "אדריכלות ובנייה",
                duration: "2 שנים",
                cost: "AUD 40,000-50,000 לשנה",
                desc: "תעשיית הבנייה באוסטרליה בפריחה. הכשרות מוכרות בינלאומית. שילוב של תיאוריה ופרקטיקה עם פרויקטים אמיתיים.",
                immigration: "מקצוע בביקוש באזורים אזוריים",
              },
            ].map((program, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-au/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <program.icon className="w-6 h-6 text-au" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        {program.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-muted">
                        <Clock className="w-3 h-3" />
                        {program.duration}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                    {program.desc}
                  </p>
                  <div className="space-y-2 pt-3 border-t border-border">
                    <div className="flex items-center gap-2 text-xs text-foreground/70">
                      <DollarSign className="w-3 h-3 text-au" />
                      {program.cost}
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <CheckCircle2 className="w-3 h-3 text-green-600" />
                      <span className="text-green-700 font-medium">
                        {program.immigration}
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PhD / DOCTORATE ===== */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                🔬 דוקטורט באוסטרליה
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                מלגות מלאות, מחקר ברמה עולמית ומסלול מהיר לתושבות קבועה
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* RTP Scholarships */}
            <AnimatedSection delay={0}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-border h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-au/10 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-au" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    מלגות RTP (Research Training Program)
                  </h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "מלגת שכר לימוד מלאה — הממשלה האוסטרלית מכסה את כל שכר הלימוד",
                    "קצבת מחייה של כ-AUD 32,000 בשנה (פטורה ממס)",
                    "מלגת מעבר — סיוע בעלויות רילוקיישן והתיישבות",
                    "משך הדוקטורט: 3-4 שנים בדרך כלל",
                    "אפשרות לעבוד עד 20 שעות שבועיות בנוסף למלגה",
                    "בן/בת הזוג מקבל/ת ויזת עבודה מלאה",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-au flex-shrink-0 mt-0.5" />
                      <span className="text-muted text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Research Strengths + Immigration */}
            <AnimatedSection delay={150}>
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-border">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-au/10 rounded-xl flex items-center justify-center">
                      <FlaskConical className="w-6 h-6 text-au" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      חוזקות מחקריות
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "בינה מלאכותית",
                      "מחשוב קוונטי",
                      "ביוטכנולוגיה",
                      "אנרגיה מתחדשת",
                      "מדעי הים",
                      "אסטרופיזיקה",
                      "ננוטכנולוגיה",
                      "מדעי הסביבה",
                      "רפואה רגנרטיבית",
                      "סייבר",
                    ].map((field) => (
                      <span
                        key={field}
                        className="bg-au/5 text-foreground/80 text-sm px-4 py-2 rounded-full border border-au/20"
                      >
                        {field}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-l from-au/10 to-yellow-50 rounded-2xl p-8 border border-au/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6 text-au" />
                    <h3 className="text-xl font-bold text-foreground">
                      דוקטורט → הגירה
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "4 שנות ויזת עבודה לאחר סיום (Post-Study Work)",
                      "5 נקודות בונוס במערכת הניקוד לבעלי דוקטורט",
                      "עדיפות גבוהה ב-Global Talent Visa (Subclass 858)",
                      "אפשרות ל-PR ישירות דרך employer sponsorship",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                        <ArrowLeft className="w-4 h-4 text-au flex-shrink-0 mt-0.5 rotate-180" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== IMMIGRATION PATHWAY ===== */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                🛂 מסלול ההגירה באוסטרליה
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                מערכת ניקוד שקופה ומסלולים מרובים — הדרך שלך לתושבות קבועה
              </p>
            </div>
          </AnimatedSection>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative">
              <div className="absolute right-6 top-0 bottom-0 w-0.5 bg-au/30 hidden md:block" />

              <div className="space-y-8">
                {[
                  {
                    step: 1,
                    icon: GraduationCap,
                    title: "ויזת סטודנט (Subclass 500)",
                    desc: "ויזה ללימודי תואר שני או דוקטורט. בן/בת הזוג מקבל/ת ויזת עבודה מלאה (Subclass 500 Secondary). ילדים לומדים בבית ספר ציבורי.",
                    color: "bg-au",
                  },
                  {
                    step: 2,
                    icon: Briefcase,
                    title: "ויזת עבודה (Post-Study Work — Subclass 485)",
                    desc: "תואר שני: 2 שנים. תואר שני STEM / באזור אזורי: עד 4 שנים. דוקטורט: 4 שנים. עבודה בכל תחום, בכל מעסיק. בן/בת הזוג ממשיך/ה לעבוד.",
                    color: "bg-au",
                  },
                  {
                    step: 3,
                    icon: FileCheck,
                    title: "תושבות קבועה (PR)",
                    desc: "מספר מסלולים אפשריים:",
                    color: "bg-au",
                    subitems: [
                      "Subclass 189 — Skilled Independent: PR ללא חסות מעסיק, לפי מערכת ניקוד (גיל, השכלה, ניסיון, אנגלית)",
                      "Subclass 190 — State Nominated: חסות מדינה/טריטוריה, 5 נקודות בונוס",
                      "Subclass 491 — Skilled Work Regional: ויזה אזורית ל-5 שנים, מובילה ל-PR (Subclass 191)",
                    ],
                  },
                  {
                    step: 4,
                    icon: Shield,
                    title: "אזרחות אוסטרלית",
                    desc: "לאחר 4 שנים של תושבות קבועה (כולל שנה אחת כ-PR), ניתן להגיש בקשה לאזרחות מלאה. דרכון אוסטרלי — מהחזקים בעולם.",
                    color: "bg-au",
                  },
                ].map((item, i) => (
                  <AnimatedSection key={i} delay={i * 100}>
                    <div className="flex gap-6 items-start">
                      <div className={`flex-shrink-0 w-12 h-12 ${item.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md z-10`}>
                        {item.step}
                      </div>
                      <div className="bg-white rounded-xl p-6 shadow-sm border border-border flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <item.icon className="w-5 h-5 text-au" />
                          <h3 className="text-lg font-bold text-foreground">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-muted text-sm leading-relaxed">
                          {item.desc}
                        </p>
                        {item.subitems && (
                          <ul className="mt-3 space-y-2">
                            {item.subitems.map((sub, j) => (
                              <li key={j} className="flex items-start gap-2 text-sm text-foreground/70">
                                <CheckCircle2 className="w-4 h-4 text-au flex-shrink-0 mt-0.5" />
                                {sub}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>

          {/* Points System */}
          <AnimatedSection>
            <div className="bg-gradient-to-l from-yellow-50 to-au/5 rounded-2xl p-8 md:p-10 border border-au/20 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                📊 מערכת הניקוד — איך זה עובד?
              </h3>
              <p className="text-muted text-center mb-8">
                נדרשות לפחות 65 נקודות להגשה. ככל שיש יותר נקודות, הסיכוי להזמנה גבוה יותר.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { category: "גיל (25-32)", points: "30 נקודות" },
                  { category: "אנגלית מצוינת (IELTS 8+)", points: "20 נקודות" },
                  { category: "תואר שני", points: "15 נקודות" },
                  { category: "דוקטורט", points: "20 נקודות" },
                  { category: "ניסיון עבודה באוסטרליה (3+ שנים)", points: "10 נקודות" },
                  { category: "חסות מדינה (190)", points: "5 נקודות" },
                  { category: "לימודים באזור אזורי", points: "5 נקודות" },
                  { category: "שפה קהילתית (עברית!)", points: "5 נקודות" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between bg-white rounded-lg px-4 py-3 border border-border"
                  >
                    <span className="text-sm text-foreground/80">{item.category}</span>
                    <span className="text-sm font-bold text-au">{item.points}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-muted mt-6">
                💡 <strong>טיפ:</strong> עברית מוכרת כ&quot;שפה קהילתית&quot; ומעניקה 5 נקודות בונוס!
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== VISUAL BREAK ===== */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="/images/compare-au.png"
          alt="חיים באוסטרליה"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-yellow-900/50 flex items-center justify-center">
          <AnimatedSection>
            <p className="text-white text-2xl md:text-3xl font-bold text-center px-4">
              🌏 אוסטרליה מחכה לך — הצעד הבא מתחיל כאן
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== WHY AUSTRALIA ===== */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                💛 למה אוסטרליה?
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                היתרונות שהופכים את אוסטרליה ליעד מועדף לישראלים
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <AnimatedSection delay={0}>
              <div className="relative h-72 rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/family-home.png"
                  alt="משפחה ישראלית באוסטרליה"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-5">
                  <span className="text-white font-bold text-lg">🏡 איכות חיים שאין כמוה</span>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <div className="relative h-72 rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/au-hero.png"
                  alt="קמפוס באוסטרליה"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-5">
                  <span className="text-white font-bold text-lg">🎓 חינוך ברמה עולמית</span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: DollarSign,
                title: "שכר גבוה מאוד",
                desc: "שכר ממוצע AUD 90,000+. תחומי ההייטק, הנדסה ובריאות — AUD 120,000+. שכר מינימום AUD 24.10 לשעה — הגבוה בעולם.",
              },
              {
                icon: Users,
                title: "קהילה ישראלית חזקה",
                desc: "קהילה ישראלית גדולה ופעילה, בעיקר בסידני ומלבורן. בתי כנסת, מסעדות ישראליות, קבוצות פייסבוק פעילות — תרגישו בבית.",
              },
              {
                icon: Leaf,
                title: "אקלים מדהים",
                desc: "מזג אוויר מעולה רוב השנה. חופים מהיפים בעולם, טבע מגוון, ואורח חיים חיצוני. מסידני הטרופית ועד מלבורן התרבותית.",
              },
              {
                icon: Shield,
                title: "כלכלה יציבה ביותר",
                desc: "30+ שנים ללא מיתון (עד COVID). כלכלה מהגדולות בעולם, מערכת בנקאית חזקה, ומדד חופש כלכלי גבוה.",
              },
              {
                icon: TrendingUp,
                title: "הייטק וסטארטאפים",
                desc: "סצנת סטארטאפים צומחת. Atlassian, Canva, Afterpay — כולן אוסטרליות. ביקוש עצום למפתחים ואנשי טכנולוגיה.",
              },
              {
                icon: Globe2,
                title: "שער לאסיה-פסיפיק",
                desc: "מיקום אסטרטגי בין מזרח למערב. הסכמי סחר עם סין, יפן, דרום קוריאה. הזדמנויות עסקיות בינלאומיות.",
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full">
                  <item.icon className="w-10 h-10 text-au mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-28 bg-gradient-to-l from-yellow-800 to-au">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="text-6xl mb-6"><FlagIcon code="au" size="3.5rem" /></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              מוכנים להתחיל את המסלול לאוסטרליה?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto leading-relaxed">
              שיחת ייעוץ חינמית ובלי התחייבות. נמפה את האפשרויות, נבנה תוכנית אישית,
              ונלווה אתכם צעד אחר צעד — מהרגע שמחליטים ועד שמגיעים.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-yellow-800 font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-lg cursor-pointer"
            >
              <Phone className="w-5 h-5" />
              בדוק התאמה בחינם
            </a>
            <p className="text-white/60 text-sm mt-4">
              📧 info@relocationil.com | 📞 050-XXX-XXXX
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
