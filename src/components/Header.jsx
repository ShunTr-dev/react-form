import { NavLink } from 'react-router-dom'
import logoImg from '../assets/logo.jpg'

//className={({ isActive }) => (isActive ? classes.active : undefined)}
import classes from './MainNavigation.module.css'

export default function Header() {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink
                            to="/"
                            style={{ boxSizing: 'border-box' }}
                            className={({ isActive }) => (isActive ? classes.active : undefined)}
                            end>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/with-refs" className={({ isActive }) => (isActive ? classes.active : undefined)}>
                            With Refs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/built-in" className={({ isActive }) => (isActive ? classes.active : undefined)}>
                            Form built-in
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/react-router-dom"
                            className={({ isActive }) => (isActive ? classes.active : undefined)}>
                            React Router Dom
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
