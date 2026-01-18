import Header from "@/components/header"
import Footer from "@/components/footer"
import OurStoryHero from "@/components/our-story-hero"
import OurMilestones from "@/components/our-milestones"
import QualityCommitment from "@/components/quality-commitment"
import TeamSection from "@/components/team-section"
import StoryCta from "@/components/story-cta"

export const metadata = {
  title: "Our Story | KDS Bakery",
  description: "Discover the artisanal journey of KDS Bakery, crafting moments of sweetness since 1994.",
}

export default function OurStoryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <OurStoryHero />
      <OurMilestones />
      <QualityCommitment />
      <TeamSection />
      <StoryCta />
      <Footer />
    </main>
  )
}
