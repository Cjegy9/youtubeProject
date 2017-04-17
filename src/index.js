import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAuWl3xl_Ti8tbAB4j2laAkriDR7ebtOew';

const App = () => {
  return (
  <div>
    <SearchBar/>
  </div>
  )
};

ReactDOM.render(<App />, document.querySelector('.container'));