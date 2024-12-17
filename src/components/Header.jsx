import { Link } from "react-router-dom"


export default function Header() {

    return (
        <>
            <header className="d-flex sticky-top justify-content-between bg-dark text-white p-4 shadow">
                <Link to="/" className="text-decoration-none text-white"><h1>BoolTrips</h1></Link>
                <nav className="d-flex align-items-center">
                    <div className="p-2 fs-5">ciao</div>
                    <div className="p-2 fs-5">ciao</div>
                    <div className="p-2 fs-5">ciao</div>
                </nav>
            </header>
        </>
    )
}