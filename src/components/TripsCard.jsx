import trips from '../data/trips'
import { Link } from 'react-router-dom'
export default function TripsCard() {


    return (
        <>
            <div className="container-sm">
                <div className="row row-cols-1">
                    {
                        trips.map(trip => (
                            <div className="col" key={trip.id}>
                                <div className="card border-dark shadow my-3">
                                    <div className="card-body">
                                        <h1 className="card-title">
                                            {trip.destinazione}
                                        </h1>
                                        <div className='card-text'>
                                            <div className='fs-5'>
                                                <span><strong>Data Inizio: </strong></span><span>{trip.dataInizio}</span>
                                            </div>

                                            <div className='fs-5'>
                                                <span><strong>Data Fine: </strong></span><span>{trip.dataFine}</span>
                                            </div>
                                        </div>
                                        <div className='mt-3'>
                                            <Link to={`trip/${trip.id}`} className='btn btn-dark'>Dettagli Viaggio</Link>
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