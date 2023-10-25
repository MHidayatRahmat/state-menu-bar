import { useRouteError } from "react-router-dom";

function ErrorPages () {
    const error = useRouteError();
    return(
        <div>Error.....</div>
    )
}
export default ErrorPages;