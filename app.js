//https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/

var request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function () {
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) 
  {
    data.forEach(movie => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');
      const img = document.createElement('img');
      img.src = movie.image;
      
      const cardText = document.createElement('div');
      cardText.setAttribute('class', 'card-text');
      const h1 = document.createElement('h1');
      h1.textContent = movie.title;
      const h2 =  document.createElement('h2');
      h2.textContent = movie.original_title;

      const p1 = document.createElement('p');
      p1.textContent = movie.release_date + ' • ' + movie.director;
      p1.setAttribute('class', 'extra');

      const p2 = document.createElement('p');
      //movie.description = movie.description.substring(0, 300);
      //p.textContent = `${movie.description}...`;
      p2.textContent = movie.description;
      p2.setAttribute('class', 'description');

      container.appendChild(card);

      card.appendChild(img);
      cardText.appendChild(h1);
      cardText.appendChild(h2);
      cardText.appendChild(p1);
      cardText.appendChild(p2);
      card.appendChild(cardText);
    });
  }
  else 
  {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `rip :/`;
    app.appendChild(errorMessage);
  }
}

request.send();

const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'img/logo.png';
logo.setAttribute('class', 'logo');

const initialText = document.createElement('p');
initialText.textContent = 'Studio Ghibli (1985) is a Japanese animation film studio best known for its animated feature films, and has also produced several short subjects, television commercials, and one television film. This is a useful guide to its movies and their information!';
initialText.setAttribute('class', 'initialText');

const hr = document.createElement('hr');

const header = document.createElement('div');
header.setAttribute('class', 'header');

const container = document.createElement('div');
container.setAttribute('class', 'container');

header.appendChild(logo);
header.appendChild(initialText);
app.appendChild(header);
app.appendChild(hr);
app.appendChild(container);