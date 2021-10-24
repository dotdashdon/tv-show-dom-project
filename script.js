//You can edit ALL of the code here

//create body
const body = document.querySelector('body');
body.style.backgroundColor = 'white';


const rootElem = document.getElementById("root");
//rootElem.style.backgroundColor ='white';

//container for all episodes cards 
const container = document.createElement ('container');
container.setAttribute('class', 'container');
document.body.appendChild(container);

//episode card - append to container 
const cardDiv = document.createElement('div'); 
cardDiv.setAttribute('class', 'cardContainer');
container.appendChild(cardDiv);

//episode title append to card 
const episodeTitle = document.createElement('h1');
episodeTitle.setAttribute('class' ,'episodeTitle');
episodeTitle.innerText="Episode Title";
cardDiv.appendChild(episodeTitle);


//season append to card 

const season = document.createElement('h1');
season.setAttribute('class', 'season');
season.innerText = '1';
cardDiv.appendChild(season);

//episode image append to card 

const image = document.createElement('img');
image.setAttribute('class', 'image');//??
cardDiv.appendChild(image);

//summary append to card 
const summary= document.createElement('p');
summary.setAttribute('class', 'summary');
summary.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit porttitor condimentum. Praesent sed varius mi, nec rhoncus tellus. Fusce pretium consectetur dui a dignissim. Ut tempor orci odio, sed sollicitudin purus suscipit eu. Aenean nec aliquam urna, at ultrices ante. Phasellus ultrices massa id ante accumsan cursus. Nullam auctor magna at metus rutrum accumsan. Donec pharetra lorem in ligula posuere, vel blandit neque cursus.';
cardDiv.appendChild(summary);

//box for Title 

// //create header 
// const titleBar = document.createElement('div');
// header.classList.add('title-bar');
// const header = document.createElement('h1');
// document.body.appendChild(header);
// titleBar.style.backgroundColor = 'lightblue';
// header.innerText = 'TV SHOWS';



//create wrapper div
const cardWrapper = document.createElement('div');
document.body.appendChild(cardWrapper);
cardWrapper.style.backgroundColor = 'white';
cardWrapper.innerText= 'Something here';

//button
const btn = document.createElement("Button");
btn.innerHTML ="Click me";
document.body.appendChild(btn);


//div 
const containerDiv = document.createElement("div");
containerDiv.innerText="test";
containerDiv.style.color ="red";
document.body.appendChild(containerDiv);


function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = ` ${episodeList.length} Episodes`;
}

window.onload = setup;
