import { useParams, Link } from "react-router-dom"
import SingleTripCard from "../components/SingleTripCard"
import Participants from "../data/Participants"
import trips from "../data/trips"
import { useState } from "react"

export default function TripPage() {

    const { id } = useParams()
    const trip = trips.find(trip => trip.id === Number(id))

    const [openAccordionId, setOpenAccordionId] = useState(null);

    const toggleAccordion = (id) => {
        setOpenAccordionId(prevId => (prevId === id ? null : id))
    }
    return (
        <div className="container-sm border rounded border-dark shadow">

            {
                <div className="my-3 d-flex align-items-center justify-content-center">
                    <h1 className="pe-3">{trip.destinazione}</h1>
                    <div className="fs-5">{`${trip.dataInizio} / ${trip.dataFine}`}</div>
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
                            isOpen={openAccordionId === participant.id}
                            toggleAccordion={() => toggleAccordion(participant.id)}
                        />
                    )}
                </div>
            </div>
            <div className="text-center mb-4">
                <Link to="/" className="btn btn-dark ">
                    Torna alla Home
                </Link>
            </div>
        </div>
    );
}