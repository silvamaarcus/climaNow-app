// Obter o elemento input.
const inputCity = document.getElementById('input-city');
// Obter o elemento button.
const btn = document.getElementById('btn-js');
// Valor da key da API OpenWeather. 
const apiKey = 'f85bbf0c95b894532333acb6385b4d94';

// Add evento de clique ao botão.
btn.addEventListener('click', handleClick);

// handleClick -> função para determinar ações ao clique.
function handleClick(event) {
  event.preventDefault(); // Impedir que a página saia da função.
  const cityValue = inputCity.value; // Obter valor do elemento input.
  getCity(cityValue); // Iniciando a função para obter a cidade, com parametro definido pelo valor do elemento input.
}

function getCity(cityValue) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=${apiKey}`)
    .then(r => r.json())
    .then(city => {
      // Atulizar a bandeira de acordo com o local definido pelo usuario no input.
      const newflag = document.getElementById('country-flag');
      newflag.setAttribute('src', `https://flagsapi.com/${city.sys.country}/shiny/24.png`);
      // Mostrar nome, temperatura e umidade da cidade definida pelo usuario no input.
      document.getElementById('city-value').innerText = city.name;      
      document.getElementById('temp-value').innerText = `${parseInt(city.main.temp)}°`;
      document.getElementById('humidity-value').innerText = `${city.main.humidity}%`;
    })
    .catch(error => {
      // Tratamento de erros
      console.error('Erro ao obter dados meteorológicos:', error);
      alert('Confira se a cidade foi informada corretamente!')
    });
}
