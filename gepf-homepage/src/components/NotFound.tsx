import Cursor from './Cursor'
import Nav from './Nav'

export default function NotFound() {
  return (
    <>
      <Cursor />
      <Nav />
      <section className="not-found">
        <p className="hero-eyebrow">↳ how did you end up here.</p>
        <h1 className="not-found-title">
          4<span className="not-found-zero">0</span>4
        </h1>
        <p className="not-found-subtitle">
          this page doesn't exist. not even in our backlog.
        </p>
        <a href="/" className="not-found-link">← back to something real</a>
      </section>
    </>
  )
}
