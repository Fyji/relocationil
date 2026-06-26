import Image from "next/image";
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
  Clock,
  MapPin,
  Sparkles,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import FlagIcon from "@/components/FlagIcon";
import CountUp from "@/components/CountUp";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-primary-dark via-primary to-primary-light overflow-hidden">
        <Image
          src="/images/hero-bg.png"
          alt="קמפוס אוניברסיטאי בניו זילנד"
          fill
          className="object-cover opacity-25"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/70 via-primary/60 to-primary/50" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white py-20">
          <p className="text-accent font-semibold text-sm sm:text-base mb-4 tracking-wide">
            המסלול המהיר לאזרחות באוסטרליה וניו זילנד
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            תואר שני שנגמר
            <br />
            <span className="text-accent">בדרכון חדש</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/85 mb-4 max-w-3xl mx-auto leading-relaxed">
            תואר שני באוניברסיטה מובילה, ויזת עבודה מובטחת, ומסלול ישיר לתושבות קבועה — לכל המשפחה.
          </p>
          <p className="text-base sm:text-lg text-white/65 mb-8 max-w-2xl mx-auto">
            לא רק אתה — גם בן/בת הזוג עובד/ת, הילדים לומדים חינם, וכל המשפחה על המסלול.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-lg cursor-pointer"
            >
              <Phone className="w-5 h-5" />
              שיחת התאמה חינם — 15 דקות
            </a>
            <a
              href="#path"
              className="inline-flex items-center gap-2 border-2 border-white/50 hover:border-white text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 cursor-pointer"
            >
              איך זה עובד?
              <ArrowLeft className="w-4 h-4" />
            </a>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { icon: Users, text: "בן/בת זוג עובד/ת מיום 1" },
              { icon: GraduationCap, text: "ילדים לומדים בחינם" },
              { icon: Briefcase, text: "עד 3 שנות ויזת עבודה" },
              { icon: Shield, text: "מסלול ברור לאזרחות" },
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

      {/* ===== PROBLEM — AGITATE ===== */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                נמאס לכם לשמוע &quot;קנדה נסגרת&quot;?
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
                ויזות עבודה שנדחות, מכסות שנגמרות, תורים של שנתיים.
                בינתיים אוסטרליה וניו זילנד <strong className="text-primary">מחפשות בדיוק את האנשים שלכם</strong> —
                מהנדסים, מפתחים, אנשי עסקים, ואנשי חינוך.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              {[
                { emoji: <FlagIcon code="ca" size="2rem" />, text: "קנדה: 18+ חודשי המתנה לויזה", sub: "מכסות מלאות, חוסר ודאות" },
                { emoji: <FlagIcon code="nz" size="2rem" />, text: "ניו זילנד: 4-8 שבועות לויזה", sub: "Green List — PR מהיר למקצועות מבוקשים" },
                { emoji: <FlagIcon code="au" size="2rem" />, text: "אוסטרליה: ביקוש למהגרים מיומנים", sub: "שכר ממוצע AUD 95K+" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`rounded-xl p-5 ${i === 0 ? "bg-red-50 border border-red-200" : "bg-green-50 border border-green-200"}`}
                >
                  <span className="text-3xl block mb-2">{item.emoji}</span>
                  <p className="font-semibold text-foreground text-sm mb-1">{item.text}</p>
                  <p className="text-muted text-xs">{item.sub}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== THE PATH (Solution) ===== */}
      <section id="path" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-primary font-semibold text-sm mb-2">הפתרון</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                4 צעדים מהרשמה <span className="text-primary">עד דרכון חדש</span>
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                מסלול ברור, מוכח, ועם ליווי צמוד בכל שלב
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                icon: BookOpen,
                title: "לימודים",
                subtitle: "12-18 חודשים",
                desc: "תואר שני באוניברסיטה מדורגת. ויזת סטודנט עם היתר עבודה — גם לבן/בת הזוג.",
                color: "text-primary",
                bg: "bg-primary/5",
              },
              {
                step: 2,
                icon: Briefcase,
                title: "ויזת עבודה",
                subtitle: "עד 3 שנים",
                desc: "Post-Study Work Visa לכל תחום. שוק עבודה רעב למקצוענים עם תואר מקומי.",
                color: "text-secondary",
                bg: "bg-secondary/5",
              },
              {
                step: 3,
                icon: Home,
                title: "תושבות קבועה",
                subtitle: "PR",
                desc: "מערכת ניקוד שקופה. מי שבתחום מבוקש — מקבל PR תוך חודשים ספורים.",
                color: "text-primary-light",
                bg: "bg-primary-light/5",
              },
              {
                step: 4,
                icon: Award,
                title: "אזרחות",
                subtitle: "5 שנים מההגעה",
                desc: "דרכון ניו זילנדי או אוסטרלי. ביטוח חיים לכל המשפחה — לדורות.",
                color: "text-accent",
                bg: "bg-accent/5",
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div
                  className={`${item.bg} rounded-2xl p-8 text-center h-full border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <span className={`text-lg font-bold ${item.color}`}>
                      {item.step}
                    </span>
                  </div>
                  <item.icon className={`w-12 h-12 ${item.color} mx-auto mb-4`} />
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className={`text-sm font-semibold ${item.color} mb-3`}>
                    {item.subtitle}
                  </p>
                  <p className="text-muted text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VISUAL BREAK — STUDENTS ===== */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="/images/students.png"
          alt="סטודנטים ישראלים בקמפוס"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary-dark/50 flex items-center justify-center">
          <AnimatedSection>
            <div className="text-center px-4">
              <p className="text-white text-2xl md:text-3xl font-bold mb-2">
                כבר 100+ משפחות במסלול
              </p>
              <p className="text-white/70 text-base md:text-lg">
                הם לא חיכו. הם התחילו.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== WHY NZ & AU ===== */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-primary font-semibold text-sm mb-2">למה דווקא שם?</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                6 סיבות שישראלים עוברים לאוקיינוס השקט
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                לא סתם עוד יעד — אלטרנטיבה אמיתית לחיים אחרים
              </p>
            </div>
          </AnimatedSection>

          {/* Feature image row */}
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src="/images/graduation.png"
                  alt="טקס סיום לימודים"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <span className="text-white font-bold text-sm">🎓 תואר שנפתח דלתות</span>
                </div>
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src="/images/office-nz.png"
                  alt="סביבת עבודה בניו זילנד"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <span className="text-white font-bold text-sm">💼 קריירה בלי תקרת זכוכית</span>
                </div>
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src="/images/family-home.png"
                  alt="משפחה בבית חדש"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <span className="text-white font-bold text-sm">🏡 בית שאפשר להרשות</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Leaf,
                title: "איכות חיים שמרגישים ביום הראשון",
                desc: "אוויר נקי, טבע ב-10 דקות מהבית, בתי ספר מצוינים. אוסטרליה וניו זילנד בחמישייה העולמית.",
              },
              {
                icon: Users,
                title: "המשפחה לא מחכה בבית",
                desc: "בן/בת הזוג מקבל/ת ויזת עבודה פתוחה. הילדים לומדים בחינוך ציבורי. כולם מתחילים יחד.",
              },
              {
                icon: DollarSign,
                title: "שכר שמאפשר לחסוך",
                desc: "שכר ממוצע NZD 75K+ בניו זילנד, AUD 95K+ באוסטרליה. יחס הכנסה-הוצאות טוב משמעותית מישראל.",
              },
              {
                icon: Shield,
                title: "ביטחון בלי מילואים",
                desc: "מהמדינות הבטוחות בעולם. ללכת ברחוב בלילה, לשלוח ילדים לבד לבית ספר. רגיל שם.",
              },
              {
                icon: GraduationCap,
                title: "תואר שמוכר בכל העולם",
                desc: "8 אוניברסיטאות בניו זילנד, Group of Eight באוסטרליה. דירוגים עולמיים, מחקר מתקדם.",
              },
              {
                icon: Globe2,
                title: "פחות תחרות, יותר סיכוי",
                desc: "בזמן שכולם נלחמים על ויזות בקנדה — כאן המסלול פתוח, ברור, ועם ביקוש אמיתי לאנשים שלכם.",
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full">
                  <item.icon className="w-10 h-10 text-primary mb-4" />
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

      {/* ===== STATS ===== */}
      <section className="py-16 lg:py-20 bg-gradient-to-l from-primary-dark to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {[
              { end: 3, suffix: " שנים", label: "ויזת עבודה אחרי התואר" },
              { end: 8, suffix: "", label: "אוניברסיטאות בניו זילנד" },
              { end: 95, suffix: "%", label: "מהמשפחות שליווינו — נשארו" },
              { end: 100, suffix: "+", label: "משפחות במסלול", prefix: "" },
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div>
                  <div className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-inter)] mb-2">
                    <CountUp
                      end={stat.end}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                    />
                  </div>
                  <p className="text-white/70 text-sm">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NZ vs AU COMPARE ===== */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-primary font-semibold text-sm mb-2">שני מסלולים מנצחים</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                ניו זילנד או אוסטרליה — <span className="text-primary">מה מתאים לך?</span>
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                שתי מדינות מעולות, מסלולים שונים. 15 דקות שיחה וניעזור לך לבחור
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* NZ Card */}
            <AnimatedSection delay={0}>
              <a
                href="/new-zealand"
                className="block bg-white rounded-2xl border-t-4 border-nz shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full cursor-pointer overflow-hidden"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/nz-hero.png"
                    alt="נופי ניו זילנד"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                </div>
                <div className="p-8 pt-4">
                  <div className="text-4xl mb-4"><FlagIcon code="nz" size="2.5rem" /></div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    ניו זילנד
                  </h3>
                  <p className="text-muted text-sm mb-4">האופציה השקטה והחכמה</p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "3 שנות ויזת עבודה — הכי ארוכה",
                      "Green List — PR מהיר למקצועות טק",
                      "תחרות נמוכה על ויזות",
                      "עלויות לימוד נמוכות יותר",
                      "בן/בת זוג עובד/ת מיום 1",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-nz flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="text-nz font-semibold text-sm inline-flex items-center gap-1">
                    המסלול המלא לניו זילנד
                    <ArrowLeft className="w-4 h-4" />
                  </span>
                </div>
              </a>
            </AnimatedSection>

            {/* AU Card */}
            <AnimatedSection delay={150}>
              <a
                href="/australia"
                className="block bg-white rounded-2xl border-t-4 border-au shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full cursor-pointer overflow-hidden"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/au-hero.png"
                    alt="נופי אוסטרליה"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                </div>
                <div className="p-8 pt-4">
                  <div className="text-4xl mb-4"><FlagIcon code="au" size="2.5rem" /></div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    אוסטרליה
                  </h3>
                  <p className="text-muted text-sm mb-4">הכוח הכלכלי של האזור</p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "שכר ממוצע AUD 95K+ — מהגבוהים בעולם",
                      "בונוס נקודות STEM ואזורי",
                      "קהילה ישראלית גדולה ופעילה",
                      "Group of Eight — אוניברסיטאות טופ",
                      "שער לכלכלת אסיה-פסיפיק",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-au flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="text-au font-semibold text-sm inline-flex items-center gap-1">
                    המסלול המלא לאוסטרליה
                    <ArrowLeft className="w-4 h-4" />
                  </span>
                </div>
              </a>
            </AnimatedSection>
          </div>

          {/* Compare images */}
          <AnimatedSection delay={300}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
              <div className="relative h-56 rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/compare-nz.png"
                  alt="חיים בניו זילנד"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-5">
                  <span className="text-white font-bold text-lg flex items-center gap-2"><FlagIcon code="nz" size="1.4rem" /> החיים בניו זילנד</span>
                </div>
              </div>
              <div className="relative h-56 rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/compare-au.png"
                  alt="חיים באוסטרליה"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-5">
                  <span className="text-white font-bold text-lg flex items-center gap-2"><FlagIcon code="au" size="1.4rem" /> החיים באוסטרליה</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="text-center mt-10">
              <a
                href="/compare"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-bold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                השוואה מלאה — ניו זילנד vs אוסטרליה
                <ArrowLeft className="w-4 h-4" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-primary font-semibold text-sm mb-2">פשוט להתחיל</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                5 צעדים מהשיחה הראשונה עד הנחיתה
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                אנחנו מטפלים בכל הבירוקרטיה. אתם מתמקדים בחיים החדשים
              </p>
            </div>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute right-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {[
                {
                  step: 1,
                  icon: Phone,
                  title: "שיחת התאמה חינם",
                  desc: "15 דקות. מיפוי הרקע שלך, תקציב, יעדים. נגיד לך בכנות אם המסלול מתאים.",
                },
                {
                  step: 2,
                  icon: MapPin,
                  title: "בוחרים מסלול",
                  desc: "מדינה, אוניברסיטה, ותואר שמותאמים בדיוק לפרופיל שלך ולתוכנית ההגירה.",
                },
                {
                  step: 3,
                  icon: BookOpen,
                  title: "מגישים ומתקבלים",
                  desc: "אנחנו מכינים את כל המסמכים, מגישים מועמדות, ומלווים את הגשת הויזה.",
                },
                {
                  step: 4,
                  icon: Home,
                  title: "ארוזים וטסים",
                  desc: "דיור, ביטוח, חשבון בנק, תכנון כלכלי — הכל מסודר לפני שעולים על המטוס.",
                },
                {
                  step: 5,
                  icon: Heart,
                  title: "ליווי עד התושבות",
                  desc: "לא נעלמים אחרי הנחיתה. ליווי שוטף עד שמקבלים PR — ואחריו.",
                },
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i * 100}>
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md z-10">
                      {item.step}
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-border flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <item.icon className="w-5 h-5 text-primary" />
                        <h3 className="text-lg font-bold text-foreground">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-muted text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section
        id="contact"
        className="py-20 lg:py-28 bg-gradient-to-l from-primary-dark to-primary"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                15 דקות שיכולות לשנות הכל
              </h2>
              <p className="text-lg text-white/70">
                שיחת התאמה חינם. בלי התחייבות, בלי לחץ — רק תשובות
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <ContactForm />
          </AnimatedSection>

          <div className="mt-8 text-center text-white/60 text-sm space-y-1">
            <p>📧 info@relocationil.com</p>
            <p>📞 050-XXX-XXXX</p>
          </div>
        </div>
      </section>
    </>
  );
}
