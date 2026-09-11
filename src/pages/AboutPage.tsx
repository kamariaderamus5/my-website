import PageHeader from '../components/PageHeader'
import { aboutImageAsset } from '../data/content'

export default function AboutPage() {
    return (
        <section className="page-section about-page">
            <div className="about-portrait">
                <img src={aboutImageAsset} alt="Kamaria portrait" />
            </div>

            <div className="about-text">
                <PageHeader title="Greetings, I'm Kamaria." />
                <p>
                    I'm a lover of great food, good adventures and all the little things in between.



                    This space is where I share my favorite restaurants, recipes I love to make & new ones to try, travel plans, weekend getaways, and everything that brings me joy.
                </p>
            </div>
        </section>
    )
}
