import PageHeader from '../components/PageHeader'
import { aboutImageAsset } from '../data/content'

export default function AboutPage() {
  return (
    <section className="page-section about-page">
      <div className="about-portrait">
        <img src={aboutImageAsset} alt="Kamaria portrait" />
      </div>

      <div className="about-text">
        <PageHeader title="By Kamaria." />
        <p>
          I’m Kamaria, and I write about the meals that stay with me. I love good restaurants, slow cooking, and paying attention to the little things that make a place feel like home.
        </p>
      </div>
    </section>
  )
}
