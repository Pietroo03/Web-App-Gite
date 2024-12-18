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
                        <div className="accordion-body fs-6">
                            <p><strong>Nome:</strong> {participant.nome}</p>
                            <p><strong>Cognome:</strong> {participant.cognome}</p>
                            <p><strong>Data di nascita:</strong> {participant.dataNascita}</p>
                            <p><strong>Codice fiscale:</strong> {participant.codiceFiscale}</p>
                            <p><strong>Telefono:</strong> {participant.numeroTelefono}</p>
                            <p><strong>Email:</strong> {participant.email}</p>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}
