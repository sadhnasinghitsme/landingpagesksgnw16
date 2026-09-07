import { EnquiryModalProvider } from "@/components/EnquiryModal";
import { StickyTopBar } from "@/components/StickyTopBar";
import { StickyBottomBar } from "@/components/StickyBottomBar";
import { Hero } from "@/components/Hero";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Infrastructure } from "@/components/Infrastructure";
import { AdmissionTabs } from "@/components/AdmissionTabs";
import { HowToApply } from "@/components/HowToApply";
import { AgeEligibility } from "@/components/AgeEligibility";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <EnquiryModalProvider>
      <StickyTopBar />
      <main>
        <Hero />
        <WhyChooseUs />
        <Infrastructure />
        <AdmissionTabs />
        <HowToApply />
        <AgeEligibility />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyBottomBar />
    </EnquiryModalProvider>
  );
}
