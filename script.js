
//create body and its tag
const body = document.querySelector('body');
body.style.backgroundColor = 'rgb(66, 165, 245';

//NB heading created in CSS 

  //container panel for all episodes cards 
const container = document.createElement ('div');
container.setAttribute('class', 'container');
body.appendChild(container);


function makePageForEpisodes(episodeList) {    //this was provided already and displays number of episodes of series 
  const rootElem = document.getElementById("root");
  rootElem.textContent = ` ${episodeList.length} Episodes`;
  body.appendChild(rootElem);

//code below should create cards , populate with title, summary, image and append to container card

episodeList.forEach((episode) => {
  
//episode card - append to container 
const card = document.createElement('div'); 
card.setAttribute('class', 'card');
container.appendChild(card);

//episode title append to card 
const title = document.createElement('h4');
title.setAttribute('class' ,'title');
title.innerHTML =`${episode.name}`;
card.appendChild(title);

//episode count append to card - do not append to card!! 
const rootElem = document.getElementById("root");
//card.appendChild(rootElem);

//season and episode numbers -  append to card 

const season = document.createElement('h4');
season.setAttribute('class', 'season');
season.innerHTML = `${episode.season}: ${episode.number}`;
card.appendChild(season);

//episode image append to card --- images not showing up! 

const image = document.createElement('img');
image.setAttribute('class', 'image');//??
image.src =episode.name.medium;
card.appendChild(image);

//summary append to card 
const paragraph = document.createElement('p');
paragraph.setAttribute('class', 'paragraph');
paragraph.innerHTML = episode.summary; 
card.appendChild(paragraph);
}
)};


function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}


window.onload = setup;







//box for Title 

// //create header 
// const titleBar = document.createElement('div');
// header.classList.add('title-bar');
// const header = document.createElement('h1');
// document.body.appendChild(header);
// titleBar.style.backgroundColor = 'lightblue';
// header.innerText = 'TV SHOWS';



// //create wrapper div
// const cardWrapper = document.createElement('div');
// document.body.appendChild(cardWrapper);
// cardWrapper.style.backgroundColor = 'white';
// cardWrapper.innerText= 'Something here';

// //button
// const btn = document.createElement("Button");
// btn.innerHTML ="Click me";
// document.body.appendChild(btn);


//div 
// const containerDiv = document.createElement("div");
// containerDiv.innerText="test";
// containerDiv.style.color ="red";
// document.body.appendChild(containerDiv);


