import { FaqsComponent } from './components/Faqs/page'
import { FitComponent } from './components/gridOne/page'
import { Banner } from './components/layoutSection/Banner'
import { LayoutSection } from './components/layoutSection/page'
import { MakeItHappenContainer } from './components/makeitHappen/page'
import { Navbar } from './components/navigation/navbar/page'
import { PricingComponent } from './components/pricing/page'
import { ResultsComponent } from './components/Results/page'
import { TeamComponent } from './components/team/page'

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
