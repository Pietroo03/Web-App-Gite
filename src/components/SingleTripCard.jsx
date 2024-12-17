export default function SingleTripsCard({ participant }) {
    return (
        <div className="card col-3 my-4">
            <div className="card-body text-center">
                <p>{`Nome: ${participant.nome}`}</p>
                <p>{`Cognome: ${participant.cognome}`}</p>
                <p>{`ID partecipante: ${participant.id}`}</p>
                <p>{`Data di nascita: ${participant.data_nascita}`}</p>
                <p>{`CF: ${participant.cf}`}</p>
                <p>{`Telefono: ${participant.telefono}`}</p>
                <p>{`Email: ${participant.email}`}</p>
            </div>
        </div>
    );
}