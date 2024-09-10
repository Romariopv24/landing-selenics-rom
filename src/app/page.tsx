import FaqsComponent from './components/Faqs/FaqsComponent'
import { FitComponent } from './components/gridOne/FitComponent'
import { Banner } from './components/layoutSection/Banner'
import { LayoutSection } from './components/layoutSection/LayoutSection'
import { MakeItHappenContainer } from './components/makeitHappen/MakeItHappenContainer'
import { Navbar } from './components/navigation/navbar/Navbar'
import { PricingComponent } from './components/pricing/PricingComponent'
import { ResultsComponent } from './components/Results/ResultsComponent'
import { TeamComponent } from './components/team/TeamComponent'

export default function Home() {
  return (
    <>
      <LayoutSection>
        <Navbar />
        <Banner />
      </LayoutSection>
      <section id="references">
      <ResultsComponent />
      </section>
      <section id="about">
      <FitComponent />
      </section>
      <section id="steps">
      <MakeItHappenContainer />
      </section>
      <section id="book-now-section">
      <PricingComponent />
      </section>
      <section id="team">
      <TeamComponent />
      </section>
      <section id="faqs">
      <FaqsComponent />
      </section>
    </>
  )
}
