import { useParams } from "react-router-dom"
import SingleTripCard from "../components/SingleTripCard"
import Participants from "../data/Participants"

export default function TripPage() {

    const { id } = useParams()

    return (
        <div className="container">
            <div className="row">
                <div className="col d-flex justify-content-center flex-wrap gap-3">
                    {Participants.map((participant) =>
                        <SingleTripCard
                            participants_id={id}
                            key={participant.id}
                            participant={participant}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}