import { render } from '@testing-library/react';
import PokeList from './PokeList';

test('should render the list of poke cards, be able to update page and loading state', () => {
  const container = render(
    <PokeList pokemon={['butterfree', 'pikachu']} setLoading="false" setCurrentPage="1" />
  );
  expect(container).toMatchSnapshot();
});
