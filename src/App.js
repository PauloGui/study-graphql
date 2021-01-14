import React from 'react';
import { gql, useQuery } from '@apollo/client';
import './App.css';

const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
      capital
      emoji
      languages {
      code
      name
    }
    }
  }
`

function App() {
  const { data, loading, error } = useQuery(LIST_COUNTRIES);

  if (loading || error) {
    return <p>{error ? error.message : 'Loading...'}</p>;
  }
  return (
    <div className="App">
      <fieldset>
        <legend>Lista de países</legend>
        {data.countries.map(country => (
          <div key={country.code} className="countrie">
            <strong> {country.name} {country.emoji} </strong>
            <span>Capital: {country.capital} </span>
            <hr />
          </div>
        ))}
      </fieldset>
    </div>
  );
}

export default App;
