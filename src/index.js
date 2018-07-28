import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyD-MCZtP_2HekQJ34j6OL8BLn7U6Sbeock';

YTSearch({ key: API_KEY, term: 'surfboards' }, function(data) {
  console.log(data);
});
// Create a new compononent. This component should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};
// Take this html and put it on the page (in the DOM)
//  first argument takes a component, second takes a selected div
ReactDOM.render(<App />, document.querySelector('.container'));
