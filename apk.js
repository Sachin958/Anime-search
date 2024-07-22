const searchitem = document.getElementById('input');
const btn = document.getElementById('btn'); 
const cardContainer = document.getElementById('anime-cards'); 

btn.addEventListener('click', async () => {
    let inputvalue = searchitem.value;
    // console.log(inputvalue);
    let response = await fetch(`https://api.jikan.moe/v4/anime?q=${inputvalue}&sfw`);
    let data = await response.json();

    // Clear previous results
    cardContainer.innerHTML = '';

    // Display the results in the cards
    data.data.forEach(anime => {
        cardContainer.innerHTML += 
        `<div class="col-sm-6 col-xl-3">
            <div class="card" style="width: 18rem;">
                <img src="${anime.images.jpg.image_url}" class="card-img-top" alt="${anime.title}">
                <div class="card-body">
                    <h5 class="card-title">${anime.titles[0].title}</h5>
                    <p>Episodes: ${anime.episodes}</p>
                </div>
            </div>
        </div>`;
    });
});
