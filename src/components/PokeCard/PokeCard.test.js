import { render } from '@testing-library/react';
import PokeCard from './PokeCard';

test('should render the poke card with image, name, hn, attack and defense', () => {
  const container = render(
    <PokeCard
      url_image="http://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png"
      pokemon="butterfree"
      hp="60"
      attack="45"
      defense="50"
    />
  );
  expect(container).toMatchSnapshot();
});
