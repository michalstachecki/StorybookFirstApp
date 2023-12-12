
import { withRouter, reactRouterParameters } from 'storybook-addon-react-router-v6';
import ErrorBoundary from '../src/components/ErrorBoundary';
import '../src/index.css';

//👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  withRouter,
  (Story) => {
    return (
      <span>
        <ErrorBoundary>
          <Story />
        </ErrorBoundary>
      </span>
    );
  },
];

export default preview;