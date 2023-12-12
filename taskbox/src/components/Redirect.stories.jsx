import Redirect from "./Redirect";
import { reactRouterParameters } from "storybook-addon-react-router-v6";

export default {
    component: Redirect,
    title: 'Redirect',
    tags: ['autodocs'],
    reactRouter: reactRouterParameters({
        routing: {
            path: '/redirect/:pageId'
        },
    }),
};

export const Default = {
    args: {
        isRedirect: false,
    },
    parameters: {
        reactRouter: reactRouterParameters({
            location: {
                pathParams: { pageId: '1' },
            },
            routing: {
                path: '/redirect/:pageId'
            }
        }),
    }
};

export const RedicectPage = {
    args: {
        isRedirect: true,
        index: 1
    },
    parameters: {
        reactRouter: reactRouterParameters({
            location: {
                pathParams: { pageId: '2' },
            },
            routing: {
                path: '/redirect/:pageId'
            }
        }),
    }
}

export const RedicectPage2 = {
    args: {
        isRedirect: true,
        index: 2
    },
    parameters: {
        reactRouter: reactRouterParameters({
            location: {
                pathParams: { pageId: '3' },
            },
            routing: {
                path: '/redirect/:pageId'
            }
        }),
    }
}