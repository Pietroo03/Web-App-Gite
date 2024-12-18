import { Link } from "react-router-dom"


export default function Header() {

    return (
        <>
            <header className="d-flex justify-content-between align-items-center bg-dark text-white p-4 shadow">
                <Link to="/" className="text-decoration-none text-white"><h1 className="mb-0">BoolTrips</h1></Link>
                <nav className="d-flex align-items-center">
                    <div className="p-2 fs-5">ciao</div>
                    <div className="p-2 fs-5">ciao</div>
                    <div className="p-2 fs-5">ciao</div>
                </nav>
            </header>
        </>
    )
}