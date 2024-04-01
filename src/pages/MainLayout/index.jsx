import { Outlet } from 'react-router-dom'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import './style.css'

function MainLayout() {
    return (

        <div className="container">

            <header>
                <Menu />
            </header>

            <main className="main">
                <Outlet />
            </main>

            <Footer />

        </div>
    )
}

export default MainLayout

