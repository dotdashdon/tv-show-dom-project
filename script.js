const container = document.createElement("div");

const body = document.querySelector("body");
body.style.backgroundColor = "#051923";
body.style.color = "#ffffff;";

function setup() {
  container.setAttribute("class", "container");
  body.appendChild(container);
}

//container panel for all episodes cards
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);

function makePageForEpisodes(episodeList) {
  //this was provided already and displays number of episodes of series
  // const rootElem = document.getElementById("root");
  // rootElem.textContent = ` ${episodeList.length} Episodes`;
  // body.appendChild(rootElem);

  //code below should create cards , populate with title, summary, image and append to container card

  episodeList.forEach((episode) => {
    //episode card - append to container
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    container.appendChild(card);

    //episode title append to card
    const title = document.createElement("h4");
    title.setAttribute("class", "title");
    title.innerHTML = `${episode.name}`;
    card.appendChild(title);

    const rootElem = document.getElementById("root");
    //card.appendChild(rootElem);

    const season = document.createElement("h4");
    season.setAttribute("class", "season");
    season.innerHTML = `${episode.season
      .toString()
      .padStart(2, "0")}: ${episode.number.toString().padStart(2, "0")}`;
    card.appendChild(season);

    //episode image append to card

    const image = document.createElement("img");
    image.setAttribute("class", "image"); //?? change class name as too confusing
    image.src = episode.image.medium;
    card.appendChild(image);

    //summary append to card
    const paragraph = document.createElement("p");
    paragraph.setAttribute("class", "paragraph");
    paragraph.innerHTML = episode.summary;
    card.appendChild(paragraph);
  });
}

//search using james Q quick aka harry potter
const searchBar = document.getElementById("searchBar");
//let hpCharacters = [];

searchBar.addEventListener("input", (e) => {
  const searchString = e.target.value.toLowerCase();

  const filteredEps = allEpisodes.filter((episode) => {
    return (
      episodeList.name.toLowerCase().includes(searchString) ||
      episode.summary.toLowerCase().includes(searchString)
    );
  });
  makePageForEpisodes(filteredEps);
});

// const loadCharacters = async () => {
//   try {
//     const res = await fetch("https://hp-api.herokuapp.com/api/characters");
//     hpCharacters = await res.json();
//     displayCharacters(hpCharacters);
//   } catch (err) {
//     console.error(err);
//   }
// };

// const displayCharacters = (characters) => {
//   const htmlString = characters
//     .map((character) => {
//       return `
//             <li class="character">
//                 <h2>${character.name}</h2>
//                 <p>House: ${character.house}</p>
//                 <img src="${character.image}"></img>
//             </li>
//         `;
//     })
//     .join("");
//   charactersList.innerHTML = htmlString;
// };

// loadCharacters();

window.onload = setup;
