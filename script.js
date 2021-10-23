//You can edit ALL of the code here
const body = document.querySelector('body');
body.style.backgroundColor = 'green';
const rootElem = document.getElementById("root");
rootElem.style.backgroundColor ='white';

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
}

window.onload = setup;
