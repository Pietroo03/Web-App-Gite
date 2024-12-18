import { useParams, Link } from "react-router-dom"
import SingleTripCard from "../components/SingleTripCard"
import Participants from "../data/Participants"
import trips from "../data/trips"

export default function TripPage() {

    const { id } = useParams()
    const trip = trips.find(trip => trip.id === Number(id))
    return (
        <div className="container">
            <h1 className="text-center">Partecipanti</h1>
            {
                <div>
                    <h2>{trip.destinazione}</h2>
                    <span>{trip.dataInizio} </span>
                    <span>/ {trip.dataFine}</span>
                </div>
            }
            <div className="row row-cols-1">
                <div className="col py-3">
                    {Participants.map((participant) =>
                        <SingleTripCard
                            participants_id={id}
                            key={participant.id}
                            participant={participant}
                            trips={trips}
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