import { useParams, Link } from "react-router-dom"
import SingleTripCard from "../components/SingleTripCard"
import Participants from "../data/Participants"
import trips from "../data/trips"

export default function TripPage() {

    const { id } = useParams()
    const trip = trips.find(trip => trip.id === Number(id))
    return (
        <div className="container border shadow">

            {
                <div className="my-3 d-flex align-items-center justify-content-center">
                    <h1 className="pe-3">{trip.destinazione}</h1>
                    <div>{`${trip.dataInizio} / ${trip.dataFine}`}</div>
                </div>
            }

            <h1 className="">Partecipanti</h1>
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
            <div className="text-center my-3">
                <Link to="/" className="btn btn-dark ">
                    Torna alla Home
                </Link>
            </div>
        </div>
    );
}