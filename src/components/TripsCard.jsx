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
                                <div className="card my-3">
                                    <div className="card-body">
                                        <h1 className="card-title">
                                            {trip.destinazione}
                                        </h1>
                                        <div className='card-text'>
                                            <div className='fs-4'>
                                                <span><strong>Data D'inizio: </strong></span><span>{trip.dataInizio}</span>
                                            </div>

                                            <div className='fs-4'>
                                                <span><strong>Data Di Fine: </strong></span><span>{trip.dataFine}</span>
                                            </div>
                                        </div>
                                        <div className='mt-3'>
                                            <Link to={`trip/${trip.id}`} className='btn btn-primary fs-5'>Dettagli Viaggio</Link>
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