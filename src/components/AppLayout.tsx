import { NavLink, Outlet } from 'react-router'

export function AppLayout() {
  return (
    <div className="layout">
      <header className="layout-header">
        <span className="layout-title">Simple CRM</span>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
