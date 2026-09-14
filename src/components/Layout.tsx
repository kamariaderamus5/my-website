import { NavLink, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <NavLink to="/" className="brand-name">
          By Kamaria
        </NavLink>

        <nav className="main-nav" aria-label="Main navigation">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/eat">The Food Map</NavLink>
          <NavLink to="/cook">In The Kitchen</NavLink>
          <NavLink to="/wander">Getaways</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>

        <button type="button" className="header-button">Subscribe</button>
      </header>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  )
}
