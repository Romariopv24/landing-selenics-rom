'use client'
import { useEffect } from 'react'
import FaqsComponent from './components/Faqs/FaqsComponent'
import { FitComponent } from './components/gridOne/FitComponent'
import { Banner } from './components/layoutSection/Banner'
import { LayoutSection } from './components/layoutSection/LayoutSection'
import { MakeItHappenContainer } from './components/makeitHappen/MakeItHappenContainer'
import { Navbar } from './components/navigation/navbar/Navbar'
import { PricingComponent } from './components/pricing/PricingComponent'
import { ResultsComponent } from './components/Results/ResultsComponent'
import { TeamComponent } from './components/team/TeamComponent'
import styles from './page.module.css'


export default function Home() {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      console.log(event)
      // Verifica el origen del mensaje para mayor seguridad
      if (event.origin !== 'https://api.leadconnectorhq.com') return;

      // Maneja la respuesta del iframe
      if (event.data.payload.payload.length > 0) {
        console.log('Se envió el formulario correctamente');
        alert('Se envió el formulario correctamente');
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [])
  return (
    <>
      <LayoutSection>
        <Navbar />
        <Banner />
      </LayoutSection>
      <div className={styles.container}>
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
      </div>
    </>
  )
}
