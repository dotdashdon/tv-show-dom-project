//You can edit ALL of the code here

//create body
const body = document.querySelector('body');
body.style.backgroundColor = 'pink';
const rootElem = document.getElementById("root");
rootElem.style.backgroundColor ='white';

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
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
}

window.onload = setup;
