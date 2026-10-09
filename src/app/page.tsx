import HeroSection from '@/components/HeroSection'
import ProblemSection from '@/components/ProblemSection'
import ComparisonSection from '@/components/ComparisonSection'
import SolutionSection from '@/components/SolutionSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import ProofSection from '@/components/ProofSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import HintonPopup from '@/components/HintonPopup'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <ComparisonSection />
      <SolutionSection />
      <HowItWorksSection />

      <ProofSection />
      <CTASection />
      <Footer />
      <HintonPopup />
    </main>
  )
}
