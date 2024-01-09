import { useLocation } from "react-router-dom"

export default function RedirectComponent() {
    const location = useLocation();

    const getContent = () => {
        return location.state.index ? `Redirect Page ${location.state.index}` : `Main Page`;
    }

    return (<>
        <p>{getContent()}</p>
    </>)
}