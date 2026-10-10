import GithubBar from './GithubBar'
import HireBadge from './HireBadge'

export default function Hero() {
  return (
    <section className="hero">
      {/* Only shown when the visitor's system is in light mode (see index.css). */}
      <p className="light-note">light mode detected. we don't do that here.</p>
      <p className="hero-eyebrow">↳ we have day jobs. this is the other stuff.</p>
      <h1 className="hero-title">
        Gehrer
        <span className="amp"> &amp; </span>
        <span className="line2">Pfanner</span>
      </h1>
      <p className="hero-subtitle">
        Two devs from Vorarlberg building <strong>stuff</strong>.
      </p>
      <GithubBar />
      <HireBadge />
    </section>
  )
}
