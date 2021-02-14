import refs from './refs';
import country from '../templates/country.hbs';
import manyCountries from '../templates/countries.hbs';
import notification from './notifications';

export default function markup(countries) {
  if (!countries) return;
  if (countries.length === 1) {
    const markup = country(countries);
    refs.markup.insertAdjacentHTML('beforeend', markup);
    refs.countryInput.value = '';
    return;
  }
  if (countries.length >= 2 && countries.length <= 10) {
    const markup = manyCountries(countries);
    refs.markup.insertAdjacentHTML('beforeend', markup);
    return;
  }
  if (countries.length > 10) {
    notification.tooManyMatchesError();
    return;
  }
}