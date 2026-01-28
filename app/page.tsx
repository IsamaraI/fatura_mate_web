import AboutSection from "./components/AboutSection";
import AnimatedSection from "./components/AnimatedSection";
import BackToTopButton from "./components/BackToTopButton";
import ContactUsSection from "./components/ContactUsSection";
import FeatureSection from "./components/FeatureSection";
import GetStartedSection from "./components/GetStartedSection";
import PricingSection from "./components/PricingSection";
import QuestionsSection from "./components/QuestionsSection";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-blue-50 via-white to-emerald-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 font-sans">
      <BackToTopButton />
      <main className="flex min-h-screen w-full max-w-8xl flex-col gap-50 items-center justify-between py-32 px-16 bg-whitesm:items-start">
        <AnimatedSection delay={0}>
          <AboutSection />
        </AnimatedSection>
        <AnimatedSection delay={120}>
          <FeatureSection />
        </AnimatedSection>
        <AnimatedSection delay={240}>
          <PricingSection />
        </AnimatedSection>
        <AnimatedSection delay={360}>
          <QuestionsSection />
        </AnimatedSection>
        <AnimatedSection delay={480}>
          <ContactUsSection />
        </AnimatedSection>
        <AnimatedSection delay={600}>
          <GetStartedSection />
        </AnimatedSection>
      </main>
    </div>
  );
}
