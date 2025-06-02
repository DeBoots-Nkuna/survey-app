import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <header className="header-container">
      <h1 className="text-logo">_Surveys</h1>
      <nav>
        <ul className="nav-list">
          <NavLink to="/">
            <li>FILL OUT SURVEY</li>
          </NavLink>
          <NavLink to="/results">
            <li>VIEW SURVEY RESULTS</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  )
}
