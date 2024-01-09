import { useLocation } from "react-router-dom"

export default function RedirectComponent({content}) {
    const location = useLocation();

    const getTitle = () => {
        return location.state.index ? `Redirect Page ${location.state.index}` : `Main Page`;
    }

    return (<>
        <h2>{getTitle()}</h2>
        {content}
    </>)
}