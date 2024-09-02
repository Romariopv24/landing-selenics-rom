import { Banner } from './components/layoutSection/Banner'
import { LayoutSection } from './components/layoutSection/page'
import { Navbar } from './components/navigation/navbar/page'

export default function Home() {
  return (
    <>
      <LayoutSection>
        <Navbar />
        <Banner />
      </LayoutSection>
    </>
  )
}
