import '../src/index.css';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
  },
  options: {
    storySort: {
      order: ['Button', 'Card', 'Table', 'Form', 'Modal', 'Sidebar', 'Pagination', 'Tree', 'Search', 'Carousel'],
    },
  },
};
