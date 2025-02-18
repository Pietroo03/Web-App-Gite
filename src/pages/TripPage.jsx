import { useParams, Link } from "react-router-dom"
import SingleTripCard from "../components/SingleTripCard"
import Participants from "../data/Participants"
import trips from "../data/trips"
import { useState } from "react"

export default function TripPage() {

    const { id } = useParams()
    const trip = trips.find(trip => trip.id === Number(id))

    const [openAccordionId, setOpenAccordionId] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const toggleAccordion = (id) => {
        setOpenAccordionId(prevId => (prevId === id ? null : id))
    }

    // Filtraggio dei partecipanti in base al nome o cognome
    const filteredParticipants = Participants.filter(participant => {
        const fullName = `${participant.nome} ${participant.cognome}`.toLowerCase();  // Combina nome e cognome in minuscolo
        return fullName.includes(searchTerm.toLowerCase());  // Verifica se il termine di ricerca è presente
    });

    return (
        <div className="container-sm border rounded border-dark shadow">

            {
                <div className="my-3 d-flex align-items-end justify-content-center">
                    <h1 className="pe-3 mb-0">{trip.destinazione}</h1>
                    <div className="fs-5">{`${trip.dataInizio} / ${trip.dataFine}`}</div>
                </div>
            }


            <h1 className="pb-3">Partecipanti</h1>

            <div className="d-flex align-items-center pb-3">
                <i className="bi bi-search me-2 fs-2" style={{ transform: 'scaleX(-1)' }}></i>
                {/* Barra di ricerca */}
                <div className=" rounded border border-dark flex-grow-1">

                    <input
                        type="text"
                        className="form-control fs-5"
                        placeholder="Cerca per nome o cognome"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}  // Aggiorna searchTerm al cambiamento
                    />
                </div>

            </div>



            <div className="row row-cols-1">
                <div className="col py-3">
                    {filteredParticipants.map((participant) =>
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