import { useState } from 'react';

export default function SingleTripsCard({ participant }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion py-2" id={`accordion-${participant.id}`}>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <div className='shadow'>
                        <button
                            className={`accordion-button ${isOpen ? '' : 'collapsed'}`}
                            type="button"
                            onClick={toggleAccordion}
                            aria-expanded={isOpen ? 'true' : 'false'}
                            aria-controls={`collapse-${participant.id}`}
                        >
                            <h2>
                                <span>{participant.nome} </span>
                                <span>{participant.cognome}</span>
                            </h2>
                        </button>

                    </div>
                </h2>
                <div
                    id={`collapse-${participant.id}`}
                    className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
                    data-bs-parent={`#accordion-${participant.id}`}
                >
                    <div className="accordion-body fs-5">
                        <p><strong>Nome:</strong> {participant.nome}</p>
                        <p><strong>Cognome:</strong> {participant.cognome}</p>
                        <p><strong>Data di nascita:</strong> {participant.dataNascita}</p>
                        <p><strong>Codice fiscale:</strong> {participant.codiceFiscale}</p>
                        <p><strong>Telefono:</strong> {participant.numeroTelefono}</p>
                        <p><strong>Email:</strong> {participant.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
