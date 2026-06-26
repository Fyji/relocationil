import Image from "next/image";
import FlagIcon from "@/components/FlagIcon";
import {
  GraduationCap,
  Briefcase,
  Home,
  Shield,
  Users,
  Heart,
  Globe2,
  Leaf,
  DollarSign,
  CheckCircle2,
  ArrowLeft,
  BookOpen,
  Award,
  Phone,
  MapPin,
  Clock,
  Star,
  FileText,
  TrendingUp,
  Lightbulb,
  Building2,
  Microscope,
  Code,
  Stethoscope,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function NewZealandPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-[#0d5c2e] via-nz to-[#22c55e] overflow-hidden">
        <Image
          src="/images/nz-hero.png"
          alt="נופי ניו זילנד — הרים, אגמים וטבע"
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d5c2e]/70 via-nz/50 to-nz/40" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white py-20">
          <div className="text-5xl mb-6"><FlagIcon code="nz" size="3rem" /></div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            ניו זילנד
            <br />
            <span className="text-accent">המסלול המהיר לחיים חדשים</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/85 mb-8 max-w-3xl mx-auto leading-relaxed">
            אוניברסיטאות בדירוג עולמי, 3 שנות ויזת עבודה, מסלול PR ברור
            <br />
            וכל המשפחה כלולה — מיום ראשון
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-lg cursor-pointer"
            >
              <Phone className="w-5 h-5" />
              ייעוץ חינם — ניו זילנד
            </a>
            <a
              href="#universities"
              className="inline-flex items-center gap-2 border-2 border-white/50 hover:border-white text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 cursor-pointer"
            >
              גלו את האוניברסיטאות
              <ArrowLeft className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { icon: Briefcase, text: "3 שנות ויזת עבודה" },
              { icon: Users, text: "בן/בת זוג עובד/ת" },
              { icon: GraduationCap, text: "8 אוניברסיטאות מובילות" },
              { icon: Shield, text: "Green List — PR מהיר" },
            ].map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 text-sm"
              >
                <badge.icon className="w-5 h-5 text-accent flex-shrink-0" />
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
                🎓 טופ 5 האוניברסיטאות <span className="text-nz">בניו זילנד</span>
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                כל 8 האוניברסיטאות בניו זילנד מדורגות בדירוג QS העולמי. הנה החמש המובילות
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            {/* University of Auckland */}
            <AnimatedSection delay={0}>
              <div className="bg-white rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2 bg-nz flex-shrink-0" />
                  <div className="p-8 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="bg-nz/10 text-nz font-bold px-3 py-1 rounded-full text-sm">#1 בניו זילנד</span>
                          <span className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full text-sm">QS ~68 עולמי</span>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">University of Auckland</h3>
                        <p className="text-muted flex items-center gap-1 mt-1">
                          <MapPin className="w-4 h-4" /> אוקלנד — העיר הגדולה בניו זילנד
                        </p>
                      </div>
                      <Star className="w-8 h-8 text-nz" />
                    </div>
                    <p className="text-foreground/80 leading-relaxed mb-4">
                      האוניברסיטה המובילה בניו זילנד והיחידה שנמצאת ב-Top 100 העולמי. מוסד מחקרי מהשורה הראשונה עם מוניטין בינלאומי חזק, סביבת לימודים מודרנית ורשת בוגרים רחבה. אוקלנד היא מרכז הטכנולוגיה והעסקים של המדינה, מה שמציע הזדמנויות תעסוקה מצוינות כבר בזמן הלימודים.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["הנדסה", "מדעי המחשב", "עסקים (MBA)", "רפואה", "משפטים", "מדעי הנתונים"].map((f) => (
                        <span key={f} className="bg-nz/5 text-nz border border-nz/20 text-xs font-medium px-3 py-1 rounded-full">{f}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* University of Otago */}
            <AnimatedSection delay={100}>
              <div className="bg-white rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2 bg-nz flex-shrink-0" />
                  <div className="p-8 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="bg-nz/10 text-nz font-bold px-3 py-1 rounded-full text-sm">#2 בניו זילנד</span>
                          <span className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full text-sm">QS ~206 עולמי</span>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">University of Otago</h3>
                        <p className="text-muted flex items-center gap-1 mt-1">
                          <MapPin className="w-4 h-4" /> דנידין — עיר סטודנטים קלאסית
                        </p>
                      </div>
                      <Award className="w-8 h-8 text-nz" />
                    </div>
                    <p className="text-foreground/80 leading-relaxed mb-4">
                      האוניברסיטה הוותיקה ביותר בניו זילנד (1869), ידועה במיוחד בתחומי הבריאות והמדעים. דנידין היא עיר סטודנטים אותנטית עם עלות מחיה נמוכה משמעותית מאוקלנד או וולינגטון. הקמפוס ההיסטורי מוקף בטבע מרהיב, ואווירת הקהילה חמה ומזמינה.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["רפואה ובריאות", "מדעים ביולוגיים", "שיניים", "פיזיותרפיה", "פסיכולוגיה", "ביוטכנולוגיה"].map((f) => (
                        <span key={f} className="bg-nz/5 text-nz border border-nz/20 text-xs font-medium px-3 py-1 rounded-full">{f}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Victoria University of Wellington */}
            <AnimatedSection delay={200}>
              <div className="bg-white rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2 bg-nz flex-shrink-0" />
                  <div className="p-8 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="bg-nz/10 text-nz font-bold px-3 py-1 rounded-full text-sm">#3 בניו זילנד</span>
                          <span className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full text-sm">QS ~241 עולמי</span>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">Victoria University of Wellington</h3>
                        <p className="text-muted flex items-center gap-1 mt-1">
                          <MapPin className="w-4 h-4" /> וולינגטון — הבירה
                        </p>
                      </div>
                      <Building2 className="w-8 h-8 text-nz" />
                    </div>
                    <p className="text-foreground/80 leading-relaxed mb-4">
                      ממוקמת בלב הבירה וולינגטון, לצד משרדי הממשלה, חברות טכנולוגיה מובילות ותעשיית הקולנוע (Weta Workshop). חזקה במיוחד במשפטים, מדיניות ציבורית, סייבר וטכנולוגיה. הקרבה למרכזי הכוח וההייטק יוצרת הזדמנויות נטוורקינג ותעסוקה ייחודיות.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["משפטים", "מדיניות ציבורית", "סייבר סקיוריטי", "מדעי המחשב", "ארכיטקטורה", "עיצוב"].map((f) => (
                        <span key={f} className="bg-nz/5 text-nz border border-nz/20 text-xs font-medium px-3 py-1 rounded-full">{f}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Massey University */}
            <AnimatedSection delay={300}>
              <div className="bg-white rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2 bg-nz flex-shrink-0" />
                  <div className="p-8 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="bg-nz/10 text-nz font-bold px-3 py-1 rounded-full text-sm">#4 בניו זילנד</span>
                          <span className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full text-sm">QS ~239 עולמי</span>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">Massey University</h3>
                        <p className="text-muted flex items-center gap-1 mt-1">
                          <MapPin className="w-4 h-4" /> פאמרסטון נורת׳ | אוקלנד | וולינגטון
                        </p>
                      </div>
                      <Globe2 className="w-8 h-8 text-nz" />
                    </div>
                    <p className="text-foreground/80 leading-relaxed mb-4">
                      אוניברסיטה מולטי-קמפוסית עם שלושה מיקומים ברחבי המדינה. ידועה בגמישות, למידה מרחוק ותוכניות מעשיות. מובילה בתחומי הווטרינריה (מקום 23 בעולם!), מדעי המזון, חקלאות, עיצוב ותקשורת. מצוינת למי שמחפש איזון בין לימודים לעבודה.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["וטרינריה", "מדעי המזון", "חקלאות וסביבה", "עיצוב ותקשורת", "ניהול עסקים", "למידה מרחוק"].map((f) => (
                        <span key={f} className="bg-nz/5 text-nz border border-nz/20 text-xs font-medium px-3 py-1 rounded-full">{f}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* University of Canterbury */}
            <AnimatedSection delay={400}>
              <div className="bg-white rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2 bg-nz flex-shrink-0" />
                  <div className="p-8 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="bg-nz/10 text-nz font-bold px-3 py-1 rounded-full text-sm">#5 בניו זילנד</span>
                          <span className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full text-sm">QS ~256 עולמי</span>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">University of Canterbury</h3>
                        <p className="text-muted flex items-center gap-1 mt-1">
                          <MapPin className="w-4 h-4" /> קרייסטצ׳רץ׳ — האי הדרומי
                        </p>
                      </div>
                      <Lightbulb className="w-8 h-8 text-nz" />
                    </div>
                    <p className="text-foreground/80 leading-relaxed mb-4">
                      ממוקמת בקרייסטצ׳רץ׳, העיר הגדולה באי הדרומי. ידועה בהנדסה (מהטובות באוקיינוס השקט), מדעי המחשב ומדעי הטבע. העיר עברה שיקום מרשים לאחר רעידת האדמה של 2011 ומציעה תשתיות חדשניות, עלות מחיה נוחה וגישה לחוויות טבע מדהימות.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["הנדסה", "מדעי המחשב", "יערנות", "מדעי הטבע", "חינוך", "הנדסת תוכנה"].map((f) => (
                        <span key={f} className="bg-nz/5 text-nz border border-nz/20 text-xs font-medium px-3 py-1 rounded-full">{f}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== VISUAL BREAK — STUDENTS ===== */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="/images/students.png"
          alt="סטודנטים בקמפוס בניו זילנד"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-nz/50 flex items-center justify-center">
          <AnimatedSection>
            <p className="text-white text-2xl md:text-3xl font-bold text-center px-4">
              🎓 כל 8 האוניברסיטאות בניו זילנד מדורגות בדירוג QS העולמי
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== MASTER'S PROGRAMS ===== */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                📚 תוכניות תואר שני <span className="text-nz">בניו זילנד</span>
              </h2>
              <p className="text-lg text-muted max-w-3xl mx-auto">
                תואר שני (Master&apos;s) הוא המפתח למסלול ההגירה. 1-2 שנות לימוד שפותחות דלת ל-3 שנות ויזת עבודה ותושבות קבועה
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Code,
                title: "IT ומדעי המחשב",
                duration: "1-1.5 שנים",
                cost: "NZD 35,000-45,000 לשנה",
                desc: "Master of IT, Software Engineering, Data Science, Cyber Security. הביקוש הגבוה ביותר בשוק העבודה — מקצועות אלו ב-Green List.",
                greenList: true,
              },
              {
                icon: Briefcase,
                title: "עסקים וניהול",
                duration: "1-2 שנים",
                cost: "NZD 30,000-50,000 לשנה",
                desc: "MBA, Master of Management, Master of Business Analytics. מתאים למי שרוצה לעבור לניהול או להקים עסק.",
                greenList: false,
              },
              {
                icon: Building2,
                title: "הנדסה",
                duration: "1-1.5 שנים",
                cost: "NZD 35,000-45,000 לשנה",
                desc: "Master of Engineering (Civil, Mechanical, Electrical, Software). כל תחומי ההנדסה ב-Green List — PR מהיר.",
                greenList: true,
              },
              {
                icon: Stethoscope,
                title: "בריאות וסיעוד",
                duration: "1.5-2 שנים",
                cost: "NZD 30,000-40,000 לשנה",
                desc: "Master of Nursing, Public Health, Health Sciences. ביקוש עצום, שכר גבוה, אפשרויות עבודה אזוריות עם בונוס ניקוד.",
                greenList: true,
              },
              {
                icon: GraduationCap,
                title: "חינוך",
                duration: "1-1.5 שנים",
                cost: "NZD 28,000-35,000 לשנה",
                desc: "Master of Teaching and Learning, Educational Leadership. חינוך הוא תחום ב-Green List עם ביקוש גבוה, במיוחד באזורים.",
                greenList: true,
              },
              {
                icon: TrendingUp,
                title: "מדעי הנתונים וסטטיסטיקה",
                duration: "1-1.5 שנים",
                cost: "NZD 35,000-42,000 לשנה",
                desc: "Master of Data Science, Applied Statistics, AI & Machine Learning. תחום צומח במהירות עם שכר גבוה מאוד.",
                greenList: false,
              },
            ].map((prog, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <prog.icon className="w-10 h-10 text-nz" />
                    {prog.greenList && (
                      <span className="bg-nz/10 text-nz text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        Green List
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{prog.title}</h3>
                  <div className="flex flex-wrap gap-3 mb-3">
                    <span className="text-xs text-muted flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {prog.duration}
                    </span>
                    <span className="text-xs text-muted flex items-center gap-1">
                      <DollarSign className="w-3 h-3" /> {prog.cost}
                    </span>
                  </div>
                  <p className="text-muted text-sm leading-relaxed">{prog.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="bg-nz/5 border border-nz/20 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-nz" />
                איך תואר שני מתחבר למסלול ההגירה?
              </h3>
              <div className="space-y-3 text-foreground/80 text-sm leading-relaxed">
                <p>
                  <strong>בזמן הלימודים:</strong> ויזת סטודנט לך, ויזת עבודה פתוחה לבן/בת הזוג (ללא הגבלת שעות), ילדים לומדים בבי&quot;ס ציבורי בחינם.
                </p>
                <p>
                  <strong>אחרי הלימודים:</strong> Post-Study Work Visa ל-3 שנים — עבודה בכל תחום, אצל כל מעסיק. מספיק זמן לצבור ניסיון ולהגיש בקשה ל-PR.
                </p>
                <p>
                  <strong>PR ואזרחות:</strong> דרך Skilled Migrant Category (מערכת ניקוד) או Green List (מסלול ישיר למקצועות נדרשים). אחרי 5 שנים — אזרחות מלאה.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== PhD / DOCTORATE ===== */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                🔬 דוקטורט (PhD) <span className="text-nz">בניו זילנד</span>
              </h2>
              <p className="text-lg text-muted max-w-3xl mx-auto">
                היתרון הגדול: דוקטורנטים בינלאומיים משלמים שכר לימוד מקומי — חיסכון של עשרות אלפי דולרים
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <AnimatedSection delay={0}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-border h-full">
                <Microscope className="w-12 h-12 text-nz mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">למה דוקטורט בניו זילנד?</h3>
                <ul className="space-y-3">
                  {[
                    "שכר לימוד מקומי לסטודנטים בינלאומיים — כ-NZD 7,000-8,000 לשנה בלבד",
                    "משך לימודים: 3-4 שנים (מלא), אפשרות חלקית",
                    "בן/בת הזוג מקבל/ת ויזת עבודה פתוחה",
                    "ילדים לומדים כתושבים מקומיים (חינם)",
                    "אפשרות לעבוד ללא הגבלת שעות בזמן הלימודים",
                    "Post-Study Work Visa ל-3 שנים אחרי הסיום",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="w-5 h-5 text-nz flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-border h-full">
                <Award className="w-12 h-12 text-nz mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">מלגות וסיוע כלכלי</h3>
                <ul className="space-y-3">
                  {[
                    "New Zealand International Doctoral Research Scholarships (NZIDRS) — מלגה מלאה כולל מחיה",
                    "University Doctoral Scholarships — כל אוניברסיטה מציעה מלגות פנימיות",
                    "Marsden Fund — מימון מחקרי ממשלתי",
                    "מלגות ספציפיות לתחומים: STEM, בריאות, סביבה",
                    "אפשרות למשרות הוראה ומחקר (Teaching/Research Assistantships)",
                    "רבות מהמלגות כוללות קצבת מחיה של NZD 28,000-30,000 לשנה",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Star className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={200}>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-border max-w-5xl mx-auto">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-nz" />
                תחומי מחקר חזקים בניו זילנד
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { area: "מדעי הסביבה ואקלים", desc: "מחקר חלוצי בשינויי אקלים, ביולוגיה ימית וקיימות" },
                  { area: "חקלאות וטכנולוגיות מזון", desc: "AgriTech מובילה עולמית, מחקר צמחים, ביוטכנולוגיה" },
                  { area: "גיאולוגיה ומדעי כדור הארץ", desc: "מעבדה טבעית לוולקניזם, רעידות אדמה ותהליכים גיאולוגיים" },
                  { area: "מדעי המחשב ו-AI", desc: "מחקר בינה מלאכותית, למידת מכונה, ביואינפורמטיקה" },
                  { area: "בריאות ציבורית ואפידמיולוגיה", desc: "מחקר בריאותי עם גישה ייחודית לאוכלוסיות מאורי ופסיפיק" },
                  { area: "אנרגיה מתחדשת", desc: "גיאותרמיה, רוח, שמש — ניו זילנד מובילה באנרגיה ירוקה" },
                ].map((item, i) => (
                  <div key={i} className="bg-surface rounded-lg p-4">
                    <h4 className="font-bold text-foreground text-sm mb-1">{item.area}</h4>
                    <p className="text-muted text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== IMMIGRATION PATHWAY ===== */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                🛂 מסלול ההגירה <span className="text-nz">לניו זילנד</span>
              </h2>
              <p className="text-lg text-muted max-w-3xl mx-auto">
                מסלול ברור ושקוף — מלימודים דרך ויזת עבודה ועד תושבות קבועה ואזרחות
              </p>
            </div>
          </AnimatedSection>

          {/* Immigration Steps */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative">
              <div className="absolute right-6 top-0 bottom-0 w-0.5 bg-nz/20 hidden md:block" />

              <div className="space-y-8">
                {[
                  {
                    step: 1,
                    icon: BookOpen,
                    title: "ויזת סטודנט (Student Visa)",
                    subtitle: "1-4 שנים",
                    desc: "ויזת לימודים לתקופת התואר. בן/בת הזוג מקבל/ת Open Work Visa. ילדים רשומים לבי\"ס ציבורי. אפשרות לעבוד עד 20 שעות בשבוע (מלא בחופשות).",
                  },
                  {
                    step: 2,
                    icon: Briefcase,
                    title: "Post-Study Work Visa",
                    subtitle: "3 שנים",
                    desc: "אחרי סיום תואר שני או דוקטורט — ויזת עבודה ל-3 שנים ללא צורך במעסיק ספציפי. חופש מלא לעבוד בכל תחום ואצל כל מעסיק. בן/בת הזוג ממשיך/ה לעבוד.",
                  },
                  {
                    step: 3,
                    icon: FileText,
                    title: "Skilled Migrant Category (SMC)",
                    subtitle: "תושבות קבועה",
                    desc: "מערכת ניקוד: גיל, כישורים, ניסיון, הכנסה, מיקום (בונוס לאזורים מחוץ לאוקלנד). נדרש שכר של לפחות פעם וחצי מהשכר החציוני. הגשה בזמן ה-PSWV.",
                  },
                  {
                    step: 4,
                    icon: Shield,
                    title: "Green List — מסלול ישיר ל-PR",
                    subtitle: "מסלול מהיר",
                    desc: "רשימת מקצועות נדרשים: IT, הנדסה, בריאות, חינוך, מדעים ועוד. Tier 1 — PR ישירות עם הגעה (מקצועות קריטיים). Tier 2 — PR אחרי שנתיים של עבודה בתחום.",
                  },
                  {
                    step: 5,
                    icon: Heart,
                    title: "אזרחות ניו זילנדית",
                    subtitle: "אחרי 5 שנים",
                    desc: "אחרי 5 שנים של תושבות קבועה — זכאות לאזרחות מלאה לכל המשפחה. דרכון ניו זילנדי — מהחזקים בעולם. גישה חופשית לאוסטרליה.",
                  },
                ].map((item, i) => (
                  <AnimatedSection key={i} delay={i * 100}>
                    <div className="flex gap-6 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-nz rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md z-10">
                        {item.step}
                      </div>
                      <div className="bg-white rounded-xl p-6 shadow-sm border border-border flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <item.icon className="w-5 h-5 text-nz" />
                          <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                        </div>
                        <p className="text-nz font-semibold text-sm mb-2">{item.subtitle}</p>
                        <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>

          {/* Green List Detail */}
          <AnimatedSection>
            <div className="bg-gradient-to-l from-nz/10 to-nz/5 border border-nz/20 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-nz" />
                מקצועות ב-Green List (דוגמאות נבחרות)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-nz text-sm mb-3">Tier 1 — PR ישיר עם הגעה</h4>
                  <ul className="space-y-2">
                    {[
                      "Software Engineer",
                      "ICT Security Specialist",
                      "Civil / Structural Engineer",
                      "Electrical Engineer",
                      "Medical Practitioner",
                      "Registered Nurse",
                      "Midwife",
                      "Construction Project Manager",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="w-4 h-4 text-nz flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm mb-3">Tier 2 — PR אחרי שנתיים עבודה</h4>
                  <ul className="space-y-2">
                    {[
                      "Data Engineer / Scientist",
                      "Multimedia Designer",
                      "Network Analyst",
                      "Teacher (Secondary / Primary)",
                      "Veterinarian",
                      "Lab Manager",
                      "Quantity Surveyor",
                      "Telecommunications Engineer",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== WHY NEW ZEALAND ===== */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                🌿 למה דווקא <span className="text-nz">ניו זילנד?</span>
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                היתרונות שהופכים את ניו זילנד לבחירה מצוינת לישראלים
              </p>
            </div>
          </AnimatedSection>

          {/* Feature images */}
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              <div className="relative h-56 rounded-xl overflow-hidden">
                <Image
                  src="/images/office-nz.png"
                  alt="סביבת עבודה בניו זילנד"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-5">
                  <span className="text-white font-bold">💼 איזון עבודה-חיים אמיתי</span>
                </div>
              </div>
              <div className="relative h-56 rounded-xl overflow-hidden">
                <Image
                  src="/images/graduation.png"
                  alt="טקס סיום לימודים בניו זילנד"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-5">
                  <span className="text-white font-bold">🎓 הישג אקדמי שנפתח דלתות</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Leaf,
                title: "איכות חיים יוצאת דופן",
                desc: "מקום #2 בעולם במדד השלום הגלובלי. אוויר נקי, טבע מדהים, קהילות חמות וביטחון אישי.",
              },
              {
                icon: Users,
                title: "המשפחה כלולה מיום 1",
                desc: "בן/בת הזוג מקבל/ת ויזת עבודה פתוחה. ילדים לומדים בחינם בבי\"ס ציבורי. כולם מכוסים.",
              },
              {
                icon: TrendingUp,
                title: "פחות תחרות מקנדה",
                desc: "מערכת ההגירה ברורה ונגישה יותר. פחות מתחרים, מסלולים ישירים יותר ל-PR.",
              },
              {
                icon: DollarSign,
                title: "עלויות סבירות יחסית",
                desc: "שכר לימוד נמוך מאוסטרליה. עלויות מחיה סבירות מחוץ לאוקלנד. יחס עלות-תועלת מצוין.",
              },
              {
                icon: Globe2,
                title: "גישה חופשית לאוסטרליה",
                desc: "כתושבי קבע או אזרחי ניו זילנד — אפשר לגור ולעבוד באוסטרליה ללא ויזה.",
              },
              {
                icon: Shield,
                title: "חברה פתוחה ומכילה",
                desc: "ניו זילנד מדורגת בין המדינות הסובלניות בעולם. חברה מולטי-תרבותית, דמוקרטית ומכבדת.",
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full">
                  <item.icon className="w-10 h-10 text-nz mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-28 bg-gradient-to-l from-[#0d5c2e] to-nz">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="text-5xl mb-6"><FlagIcon code="nz" size="3rem" /></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              מוכנים להתחיל את המסלול לניו זילנד?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              שיחת ייעוץ ראשונה בחינם. נבדוק יחד את ההתאמה שלכם למסלול, נבחר אוניברסיטה ותואר, ונבנה תוכנית אישית לכל המשפחה.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-lg cursor-pointer"
            >
              <Phone className="w-5 h-5" />
              בדוק התאמה בחינם
            </a>
            <p className="mt-6 text-white/60 text-sm">
              📧 info@relocationil.com &nbsp;|&nbsp; 📞 050-XXX-XXXX
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
