import TripsList from '../data/trips'

export default function TripsCard() {


    return (
        <>
            {
                TripsList.map(trip => (
                    <div className="container">
                        <h2 className="element-1">
                            {trip.destinazione}
                        </h2>
                        <div>
                            <div>Data D'inizio Viaggio:
                                <span>{trip.dataInizio}</span>
                            </div>

                            <div>Data Di Fine Viaggio:
                                <span>{trip.dataFine}</span>
                            </div>
                        </div>
                        <div>
                            <button>Dettagli Viaggio</button>
                        </div>
                    </div>





                ))
            }
        </>

    )
}