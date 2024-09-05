import { FitComponent } from './components/gridOne/page'
import { Banner } from './components/layoutSection/Banner'
import { LayoutSection } from './components/layoutSection/page'
import { MakeItHappenContainer } from './components/makeitHappen/page'
import { Navbar } from './components/navigation/navbar/page'
import { PricingComponent } from './components/pricing/page'
import { ResultsComponent } from './components/Results/page'

export default function Home() {
  return (
    <>
      <LayoutSection>
        <Navbar />
        <Banner />
      </LayoutSection>
      <ResultsComponent />
      <FitComponent />
      <MakeItHappenContainer />
      <PricingComponent />
    </>
  )
}
