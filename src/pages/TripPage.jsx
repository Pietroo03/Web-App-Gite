import { useParams } from "react-router-dom"
import SingleTripCard from "../components/SingleTripCard"
import Partecipants from "../data/Partecipants"

export default function TripPage() {

    const { id } = useParams()

    return (
        <div className="container">
            <div className="row">
                <div className="col d-flex justify-content-center flex-wrap gap-3">
                    {Partecipants.map((partecipant) =>
                        <SingleTripCard
                            partecipants_id={id}
                            key={partecipant.id}
                            partecipant={partecipant}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}