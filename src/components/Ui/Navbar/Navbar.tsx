import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth';

function Navbar() {
    const { user, logout } = useAuth();
    if (!user) {
        return null; // or redirect to login
    }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink
                        to="/marvel"
                        className={({ isActive }) =>
                            "nav-item nav-link" + (isActive ? " active" : "")
                        }
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        to="/dc"
                        className={({ isActive }) =>
                            "nav-item nav-link" + (isActive ? " active" : "")
                        }
                    >
                        DC
                    </NavLink>

                    <NavLink
                        to="/search"
                        className={({ isActive }) =>
                            "nav-item nav-link" + (isActive ? " active" : "")
                        }
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse order-3">
                <ul className="navbar-nav">
                    <span className='nav-item nav-link text-info'>
                        {user.name}
                    </span>

                    <button
                        className="nav-item nav-link btn"
                        onClick={logout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
  )
}

export default Navbar