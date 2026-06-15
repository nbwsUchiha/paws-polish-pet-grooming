import { Link } from "react-router-dom";

export default function BookPage() {
  return (
    <section>
      <h1>Book a groom</h1>
      <p>Pick a service from the catalog, then choose your date at checkout.</p>
      <Link className="btn primary" to="/catalog">Choose a groom</Link>
    </section>
  );
}
