import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

export default function RootLayout({ children }) {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    )
}
