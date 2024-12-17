export default function SingleTripsCard({ partecipant }) {
    return (
        <div className="card col-3 my-4">
            <div className="card-body text-center">
                <p>{`Nome: ${partecipant.nome}`}</p>
                <p>{`Cognome: ${partecipant.cognome}`}</p>
                <p>{`ID partecipante: ${partecipant.id}`}</p>
                <p>{`Data di nascita: ${partecipant.data_nascita}`}</p>
                <p>{`CF: ${partecipant.cf}`}</p>
                <p>{`Telefono: ${partecipant.telefono}`}</p>
                <p>{`Email: ${partecipant.email}`}</p>
            </div>
        </div>
    );
}