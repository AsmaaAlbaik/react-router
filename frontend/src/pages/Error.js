import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";
import { useRouteError } from "react-router-dom";
export default function Error() {
    const error = useRouteError();
    let title = 'some error accurated!';
    let message = 'Some thing went wrong';
    
    if (error.status === 500) {
        message = JSON.parse(error.data).message;
    }

    if (error.status === 404) {
        title = 'Page not found';
        message = 'The page you are looking for does not exist';
    }
    return (<>
        <MainNavigation />
        <PageContent title={title}>
            <p>{message}</p>
        </PageContent>
    </>
    )
}