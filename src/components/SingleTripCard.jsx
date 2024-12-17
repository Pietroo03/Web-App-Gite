import { useState } from 'react';

export default function SingleTripsCard({ participant }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion" id={`accordion-${participant.id}`}>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button
                        className={`accordion-button ${isOpen ? '' : 'collapsed'}`}
                        type="button"
                        onClick={toggleAccordion}
                        aria-expanded={isOpen ? 'true' : 'false'}
                        aria-controls={`collapse-${participant.id}`}
                    >
                        {participant.nome}
                    </button>
                </h2>
                <div
                    id={`collapse-${participant.id}`}
                    className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
                    data-bs-parent={`#accordion-${participant.id}`}
                >
                    <div className="accordion-body">
                        <p><strong>Nome:</strong> {participant.nome}</p>
                        <p><strong>Cognome:</strong> {participant.cognome}</p>
                        <p><strong>Data di nascita:</strong> {participant.dataNascita}</p>
                        <p><strong>Telefono:</strong> {participant.numeroTelefono}</p>
                        <p><strong>Email:</strong> {participant.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
