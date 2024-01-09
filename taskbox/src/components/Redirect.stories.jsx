import RedirectComponent from "./Redirect";
import { reactRouterParameters, reactRouterOutlets } from "storybook-addon-react-router-v6";
import { Link, Outlet } from "react-router-dom";

const routingPath = "/redirect/:pageId";
export default {
    component: RedirectComponent,
    title: 'Redirect',
    reactRouter: reactRouterParameters({
        routing: routingPath
    }),
};

export const Default = {
    parameters: {
        reactRouter: reactRouterParameters({
            location: {
                pathParams: { pageId: '1' },
                state: { index: 0 }
            },
            routing: reactRouterOutlets([
                {
                    path: '/',
                    element: <RedirectComponent />,
                },
                {
                    path: '/redirect/2',
                    element: <RedirectComponent />,
                },
                {
                    path: '/redirect/3',
                    element: <RedirectComponent />,
                },
            ]),
        }),
    },
    render: () => {
        return (
            <section>
                <ul>
                    <Link to="/" state={{ index: 0 }}>Main page</Link>
                    <br/>
                    <Link to="/redirect/2" state={{ index: 1 }}>Redirect to page</Link>
                    <br />
                    <Link to="/redirect/3" state={{ index: 2 }}>Redirect to page 2</Link>
                    <br />
                </ul>
                <Outlet />
            </section>
        )
    }
};