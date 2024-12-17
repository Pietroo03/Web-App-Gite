import { Outlet } from "react-router-dom";
import Header from '../components/Header'
import Footer from '../components/Footer'


export default function DefaultLayout() {


    return (
        <>
            <Header />

            <main className="min-vh-100 py-5 bg-light">
                <Outlet />
            </main>

            <Footer />
        </>
    )
}