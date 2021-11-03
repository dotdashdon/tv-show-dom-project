let allEpisodes; //calls all episodes (?)

 const API_URL = 'https://api.tvmaze.com/shows/82/episodes';
  

window.onload = () => {   
	fetch(API_URL)
	.then((response) => {
			return response.json();
		})
		.then((jsonData) => {
			allEpisodes = jsonData;
			makePageForEpisodes(episodeList);
     allEpisodes = getAllEpisodes();
    makePageForEpisodes(allEpisodes);
    fillEpisodeDropdown();



//global elements
const container = document.createElement("div");
const body = document.querySelector("body");
body.style.backgroundColor = "#051923";
body.style.color = "#ffffff;";

// //Page on load
// function setup() {
//   container.setAttribute("class", "container");
//   body.appendChild(container);
//   allEpisodes = getAllEpisodes();
//   makePageForEpisodes(allEpisodes);
//   fillEpisodeDropdown();
// }

//This need to return to default option of 'choose episodes' but how?
function fillEpisodeDropdown() {
  const epiGroup = document.getElementById("episodeGroup");
  epiGroup.innerHTML = "";
  allEpisodes.forEach((episode) => {
    const option = document.createElement("option");
    option.innerHTML = `${episode.name}`;
    epiGroup.appendChild(option);
  });
}

//the code in commented out below  was provided already and displays number of episodes of series. 
  //If I uncomment this, the rest of the page does not show up. 
//const rootElem = document.getElementById("root");
  //rootElem.textContent = ` ${episodeList.length} Episodes`;
  //body.appendChild(rootElem);

function makePageForEpisodes(episodeList) {
  
  //This creates cards, populates each with title, summary, image and appends to container card
  container.innerHTML = ""; //empties container of cards
  episodeList.forEach((episode) => {
    //episode card - append to container
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    container.appendChild(card);

    //Episode title append to card
    const title = document.createElement("h4");
    title.setAttribute("class", "title");
    title.innerHTML = `${episode.name}`;
    card.appendChild(title);

    //This does not do anything but it should say how many episodes are present. 
    const rootElem = document.getElementById("root");
    rootElem.textContent = ` ${episodeList.length} Episodes`;
    card.appendChild(rootElem);

    //Does this need to be turned into a function so I can reuse it in the dropdown menu code above?
    const season = document.createElement("h4");
    season.setAttribute("class", "season");
    season.innerHTML = `${episode.season
      .toString()
      .padStart(2, "0")}: ${episode.number.toString().padStart(2, "0")}`;
    card.appendChild(season);

    //Episode image appended to card
    const imgWrapper = document.createElement("div"); 
    imgWrapper.classList.add("img-wrapper"); 
    card.appendChild(imgWrapper);
    const image = document.createElement("img");
    image.setAttribute("class", "image"); //?? change class name as too confusing
    image.src = episode.image.medium;
    card.appendChild(image);


    
    //Summary appended to card
    const paragraph = document.createElement("p");
    paragraph.setAttribute("class", "paragraph");
    paragraph.innerHTML = episode.summary;
    card.appendChild(paragraph);
  });
}

//Creation of search and search function 
const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("input", (e) => {
  const searchString = e.target.value.toLowerCase();

  const filteredEps = allEpisodes.filter((episode) => {
    return (
      episode.name.toLowerCase().includes(searchString) ||
      episode.summary.toLowerCase().includes(searchString)
    );
  });
  makePageForEpisodes(filteredEps);
});

//window.onload = setup;
