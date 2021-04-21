import { useRouter } from 'next/router';

function ClientProjectsPage() {
    const router = useRouter();

    console.log(router.query);

    function loadProjectHandler() {
        //load data...
        router.push({
            pathname: '/clients/[id]/[clientprojectid]',
            query: { id: 'kim', clientprojectid: 'projecta'},
        });
    }

    return(
        <div>
            <h1>the projects of a given client</h1>
            <button onClick={loadProjectHandler}>load project A</button>
        </div>
    );
}

export default ClientProjectsPage;