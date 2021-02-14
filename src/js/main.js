import refs from './refs';
import markup from './markup';
import countriesFetch from './countriesFetch';
import debounce from 'lodash.debounce';

refs.countryInput.addEventListener('input', debounce(countryInputHandler, 500));

function countryInputHandler(event) {
  countriesFetch(event.target.value)
    .then(countries => {
        refs.markup.innerHTML = '';
      markup(countries);
    })
    .catch(error => {
      return;
    });
}