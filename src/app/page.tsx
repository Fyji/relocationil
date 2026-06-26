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
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CountUp from "@/components/CountUp";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-primary-dark via-primary to-primary-light overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/hero-bg.png"
          alt="משפחה בקמפוס אוניברסיטאי בניו זילנד"
          fill
          className="object-cover opacity-25"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/70 via-primary/60 to-primary/50" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white py-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            לימודים שהופכים
            <br />
            <span className="text-accent">לחיים חדשים</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            תואר שני → ויזת עבודה → תושבות קבועה → אזרחות
            <br />
            המסלול המלא לניו זילנד ואוסטרליה — לך ולמשפחה
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
              href="#path"
              className="inline-flex items-center gap-2 border-2 border-white/50 hover:border-white text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 cursor-pointer"
            >
              למד עוד
              <ArrowLeft className="w-4 h-4" />
            </a>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { icon: Users, text: "בן/בת זוג עובד/ת" },
              { icon: GraduationCap, text: "ילדים לומדים חינם" },
              { icon: Briefcase, text: "3 שנות ויזת עבודה" },
              { icon: Shield, text: "מסלול לאזרחות" },
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

      {/* ===== THE PATH ===== */}
      <section id="path" className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                המסלול שלך — <span className="text-primary">4 צעדים לחיים חדשים</span>
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                מסלול מוכח שאלפי ישראלים כבר עברו בהצלחה
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                icon: BookOpen,
                title: "לימודים",
                subtitle: "1-2 שנים",
                desc: "תואר שני באוניברסיטה מובילה בניו זילנד או אוסטרליה. ויזת סטודנט לך ולמשפחה.",
                color: "text-primary",
                bg: "bg-primary/5",
              },
              {
                step: 2,
                icon: Briefcase,
                title: "ויזת עבודה",
                subtitle: "3 שנים",
                desc: "Post-Study Work Visa — עבודה בכל תחום. בן/בת הזוג ממשיך/ה לעבוד.",
                color: "text-secondary",
                bg: "bg-secondary/5",
              },
              {
                step: 3,
                icon: Home,
                title: "תושבות קבועה",
                subtitle: "PR",
                desc: "Skilled Migrant Category — תושבות קבועה לכל המשפחה לפי מערכת ניקוד.",
                color: "text-primary-light",
                bg: "bg-primary-light/5",
              },
              {
                step: 4,
                icon: Award,
                title: "אזרחות",
                subtitle: "5 שנים",
                desc: "אזרחות מלאה לכל בני המשפחה. דרכון ניו זילנדי / אוסטרלי.",
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

      {/* ===== WHY NZ & AU ===== */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                למה ישראלים בוחרים בניו זילנד ובאוסטרליה?
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                היתרונות שהופכים את המסלול הזה לבחירה הטובה ביותר
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Leaf,
                title: "איכות חיים יוצאת דופן",
                desc: "ניו זילנד ואוסטרליה בטופ העולמי באיכות חיים, בטיחות, חינוך ובריאות.",
              },
              {
                icon: Users,
                title: "כל המשפחה כלולה",
                desc: "בן/בת הזוג מקבל/ת ויזת עבודה פתוחה מיום ראשון. הילדים לומדים בבי\"ס ציבורי.",
              },
              {
                icon: DollarSign,
                title: "כלכלה חזקה ושכר גבוה",
                desc: "שוק עבודה יציב, ביקוש גבוה למקצועות טכנולוגיים. שכר ממוצע NZD 75K+.",
              },
              {
                icon: Shield,
                title: "ביטחון ויציבות",
                desc: "מהמדינות הבטוחות בעולם. דמוקרטיה יציבה, חברה פתוחה ומכבדת.",
              },
              {
                icon: GraduationCap,
                title: "אקדמיה ברמה עולמית",
                desc: "8 אוניברסיטאות בניו זילנד, כולן בדירוג עולמי. Group of Eight באוסטרליה.",
              },
              {
                icon: Globe2,
                title: "פחות תחרות מקנדה",
                desc: "מסלול ההגירה ברור ונגיש יותר. פחות עומס על מערכת הויזות לעומת קנדה.",
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
              { end: 95, suffix: "%", label: "שיעור הצלחה במסלול" },
              { end: 100, suffix: "+", label: "משפחות שליווינו", prefix: "" },
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                ניו זילנד או אוסטרליה?
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                שתי מדינות מדהימות, מסלולים שונים. נעזור לך לבחור
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* NZ Card */}
            <AnimatedSection delay={0}>
              <a
                href="/new-zealand"
                className="block bg-white rounded-2xl border-t-4 border-nz p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full cursor-pointer"
              >
                <div className="text-4xl mb-4">🇳🇿</div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  ניו זילנד
                </h3>
                <ul className="space-y-3 mb-6">
                  {[
                    "3 שנות ויזת עבודה",
                    "Green List — PR מהיר",
                    "תחרות נמוכה",
                    "שקט, טבע, איכות חיים",
                    "בן/בת זוג עובד/ת מיום 1",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="w-5 h-5 text-nz flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="text-nz font-semibold text-sm inline-flex items-center gap-1">
                  למד עוד
                  <ArrowLeft className="w-4 h-4" />
                </span>
              </a>
            </AnimatedSection>

            {/* AU Card */}
            <AnimatedSection delay={150}>
              <a
                href="/australia"
                className="block bg-white rounded-2xl border-t-4 border-au p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full cursor-pointer"
              >
                <div className="text-4xl mb-4">🇦🇺</div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  אוסטרליה
                </h3>
                <ul className="space-y-3 mb-6">
                  {[
                    "2-4 שנות ויזת עבודה",
                    "בונוס STEM + אזורי",
                    "שכר גבוה מאוד",
                    "קהילה ישראלית גדולה",
                    "כלכלה דינמית ומגוונת",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="w-5 h-5 text-au flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="text-au font-semibold text-sm inline-flex items-center gap-1">
                  למד עוד
                  <ArrowLeft className="w-4 h-4" />
                </span>
              </a>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={300}>
            <div className="text-center mt-10">
              <a
                href="/compare"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-bold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                השוואה מלאה
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                איך זה עובד?
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                5 צעדים פשוטים מהשיחה הראשונה ועד הנחיתה
              </p>
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute right-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {[
                {
                  step: 1,
                  icon: Phone,
                  title: "שיחת ייעוץ חינם",
                  desc: "מיפוי הרקע שלך, תקציב, יעדים ומטרות. יחד נבין מה המסלול הנכון.",
                },
                {
                  step: 2,
                  icon: Globe2,
                  title: "בחירת מסלול",
                  desc: "בחירת מדינה, אוניברסיטה ותואר שמתאימים בדיוק לך ולמשפחה.",
                },
                {
                  step: 3,
                  icon: BookOpen,
                  title: "הרשמה + ויזה",
                  desc: "הגשת מועמדות, הכנת מסמכים, הגשת ויזת סטודנט — אנחנו מלווים כל שלב.",
                },
                {
                  step: 4,
                  icon: Home,
                  title: "הכנה ונסיעה",
                  desc: "דיור, ביטוח, תכנון כלכלי, הכנה לחיים החדשים.",
                },
                {
                  step: 5,
                  icon: Heart,
                  title: "ליווי שוטף",
                  desc: "תמיכה מלאה גם אחרי שמגיעים — עד התושבות הקבועה.",
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

      {/* ===== CONTACT / LEAD FORM ===== */}
      <section
        id="contact"
        className="py-20 lg:py-28 bg-gradient-to-l from-primary-dark to-primary"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                מתחילים?
              </h2>
              <p className="text-lg text-white/70">
                השאירו פרטים ונחזור אליכם תוך 24 שעות
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
