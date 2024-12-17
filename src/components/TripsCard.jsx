import trips from '../data/trips'
import { Link } from 'react-router-dom'
export default function TripsCard() {


    return (
        <>
            <div className="container-sm">
                <div className="row row-cols-1">
                    {
                        trips.map(trip => (
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
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
                                            <Link to={`trip/${trip.id}`} className='btn btn-primary'>Dettagli Viaggio</Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>






        </>

    )
}