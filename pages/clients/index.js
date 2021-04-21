import Link from 'next/link';

function ClientsPage() {
    const clients = [
        {id: 'kimberly', name: 'Kimberly'},
        {id: 'tracy', name: 'Tracy'},
        {id: 'tomoyo', name: 'Tomoyo'},
        {id: 'tina', name: 'Tina'}
    ];

    return(
        <div>
            <h1>the clients page</h1>
            <ul>
               {clients.map((client) => (
               <li key={client.id}>
                   <Link href={{
                       pathname: '/clients/[id]',
                       query: {id: client.id},
                   }}>{client.name}</Link>
               </li>
               ))}
            </ul>
        </div>
    );
}

export default ClientsPage;