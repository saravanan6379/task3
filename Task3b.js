fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      console.log(Name: ${country.name.common});
      console.log(Region: ${country.region});
      console.log(Subregion: ${country.subregion});
      console.log(Population: ${country.population});
      console.log(Flag: ${country.flags.png});
      console.log('----------------------------');
    });
  })
  .catch(error => console.error('Error fetching country data:', error));