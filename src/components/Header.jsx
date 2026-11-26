import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="site-header">
      <div className="container header-row">
        <span className="brand">🎬 Starlight Cinema</span>
        <nav className="nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/booking">Booking</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
