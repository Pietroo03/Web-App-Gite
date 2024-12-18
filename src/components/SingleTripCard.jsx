import { useState, } from 'react';
import { useParams } from 'react-router-dom';

export default function SingleTripsCard({ participant, isOpen, toggleAccordion }) {

    return (

        <>


            <div className="accordion py-2" id={`accordion-${participant.id}`}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <div className='border rounded-top border-dark'>
                            <button
                                className={`accordion-button ${isOpen ? 'rounded border border-0 text-black' : 'collapsed text-black'}`}
                                type="button"
                                onClick={toggleAccordion}
                                aria-expanded={isOpen ? 'true' : 'false'}
                                aria-controls={`collapse-${participant.id}`}
                            >
                                <h3>
                                    <span>{participant.nome} </span>
                                    <span>{participant.cognome}</span>
                                </h3>
                            </button>

                        </div>
                    </h2>
                    <div
                        id={`collapse-${participant.id}`}
                        className={`accordion-collapse collapse ${isOpen ? 'show shadow border border-top-0 border-dark' : ''}`}
                        data-bs-parent={`#accordion-${participant.id}`}
                    >
                        <div className="accordion-body fs-5">
                            <div className='py-2'><strong>Data di nascita:</strong> {participant.dataNascita}</div>
                            <div className='py-2'><strong>Codice fiscale:</strong> {participant.codiceFiscale}</div>
                            <div className='py-2'><strong>Telefono:</strong> {participant.numeroTelefono}</div>
                            <div className='py-2'><strong>Email:</strong> {participant.email}</div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}
