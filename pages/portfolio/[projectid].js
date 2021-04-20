import { useRouter } from 'next/router';

function PortfolioProjectPage() {
    const router = useRouter();

    console.log(router.pathname);
    console.log(router.query);

    //could use query for when you send a request to a backend server
    //to fetch the data with an id of router.query.projectid

    return(
        <div>
            <h1>the portfolio project page</h1>
        </div>
    );
}

export default PortfolioProjectPage;