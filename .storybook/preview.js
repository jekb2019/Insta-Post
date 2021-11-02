import '../src/index.css';
import Providers from '../src/providers/Providers';
import '../src/styles/helpers.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <Providers>
      <Story />
    </Providers>
  ),
];
