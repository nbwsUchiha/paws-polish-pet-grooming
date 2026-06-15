import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header className="site-header">
        <Link className="brand" to="/">Paws & Polish Grooming</Link>
        <nav>
          <Link to="/catalog">Services</Link>
          <Link to="/book">Book</Link>
          <Link to="/login">Account</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
