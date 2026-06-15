import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <section className="hero">
      <p className="eyebrow">Paws & Polish Grooming</p>
      <h1>Schedule grooming services and pay online.</h1>
      <p className="lede">
        Built with Vite, Cloudflare Workers, Supabase, and Stripe. Configure secrets in
        <code>.env.local</code> then deploy via GitHub Actions.
      </p>
      <div className="actions">
        <Link className="btn primary" to="/catalog">Book a service</Link>
        <Link className="btn ghost" to="/login">Sign in</Link>
      </div>
    </section>
  );
}
