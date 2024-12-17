import { useParams, Link } from "react-router-dom"
import SingleTripCard from "../components/SingleTripCard"
import Participants from "../data/Participants"

export default function TripPage() {

    const { id } = useParams()

    return (
        <div className="container">
            <h1 className="text-center">Partecipanti</h1>
            <div className="row row-cols-1">
                <div className="col py-3">
                    {Participants.map((participant) =>
                        <SingleTripCard
                            participants_id={id}
                            key={participant.id}
                            participant={participant}
                        />
                    )}
                </div>
            </div>
            <div className="text-center mt-3">
                <Link to="/" className="btn btn-dark ">
                    Torna alla Home
                </Link>
            </div>
        </div>
    );
}