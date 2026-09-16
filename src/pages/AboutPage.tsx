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

                <a
                    className="review-link"
                    href="https://www.google.com/maps/contrib/118099088059334315479?g_ep=CAISEjI2LjMzLjEuOTYxODkxNDMyMBgAIIG9BCpTLDk0Mjk3Njk5LDk0MjMxMTg4LDk0MjgwNTY4LDQ3MDcxNzA0LDk0MjE4NjQxLDk0MjgyMTM0LDk0Mjg2ODY5LDEwMDgyMDI0NywxMDA4MjI1MDRCAlVT&skid=5e594a71-2e5f-434a-b2bf-572def094ec6&g_st=ia"
                    target="_blank"
                    rel="noreferrer"
                >
                    Read my Google reviews
                </a>
            </div>

            <div className="about-playlist-text">
                <PageHeader
                    className="playlist-header"
                    title="What's Playing in My Kitchen"
                    subtitle="The playlist I put on when I'm cooking, pouring a glass of wine, and taking my time."
                />
            </div>

            <div className="about-playlist-embed">
                <iframe
                    title="What's Playing in My Kitchen playlist"
                    style={{ borderRadius: '12px' }}
                    src="https://open.spotify.com/embed/playlist/3c0OhC5ce6S04PernKTSlT?utm_source=generator&si=51d94b9503b0484e"
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                />
            </div>
        </section>
    )
}
