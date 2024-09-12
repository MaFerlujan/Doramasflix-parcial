'use strict'

let contenido = [
    {
        title: 'Are You Sure?!',
        image: 'https://image.tmdb.org/t/p/w780//vMRFXG4nBH5d6n0diWNWfgQTIS3.jpg',
        episode: 'Episodio: 6',
        content: 'episodios',
        genre: 'TvShow',
        rate: '4.5',
        duration: '30min/ep'
    },
    {
        title: 'Romance in the House',
        image: 'https://image.tmdb.org/t/p/w780//rksm7zN5ltuayGz1db7jV1TBVIA.jpg',
        episode: 'Episodio: 9',
        content: 'episodios',
        genre: 'Doramas',
        rate: '3.5',
        duration: '45min/ep'
    },
    {
        title: 'Love Next Door',
        image: 'https://image.tmdb.org/t/p/w780//1hE8l2tbcoDQ7IvvCU6s1sMSaMq.jpg',
        episode: 'Episodio: 7',
        content: 'episodios',
        genre: 'Doramas',
        rate: '4.2',
        duration: '45min/ep'
        
    },
    {
        title: 'Cinderella at 2AM ',
        image: 'https://image.tmdb.org/t/p/w780//jQYoaYfdgamAWehVx6ny0FA9nOR.jpg',
        episode: 'Episodio: 2',
        content: 'episodios',
        genre: 'Doramas',
        rate: '4.1',
        duration: '45min/ep'
    },
    {
        title: 'Affair',
        image: 'https://image.tmdb.org/t/p/w342//rPMg4IWyFQb9Aoj1Y2oH7wAblMI.jpg',
        genre: 'Dorama',
        rate: '4.8',
        duration: '1h 10min/ep'
    },
    {
        title: 'Kidnap',
        image: 'https://image.tmdb.org/t/p/w342//ciJXZ9lfBHaNRxKyEjF5QpHPkRI.jpg',
        genre: 'Dorama',
        rate: '3.0',
        duration: '1h 10min/ep'
    },
    {
        title: 'Reverse for you',
        image: 'https://image.tmdb.org/t/p/w342//lPrePyTEavU5DG2lY3OUbpi1muk.jpg',
        genre: 'Dorama',
        rate: '3.0',
        duration: '1h 10min/ep'
        
    },
    {
        title: 'Their Wonderful Time',
        image: 'https://image.tmdb.org/t/p/w342//8ySwsZHakn7HvHpHKDGZKkRjdMn.jpg',
        genre: 'Dorama',
        rate: '3.8',
        duration: '1h 10min/ep'
    },
    {
        title: 'Faithful Love',
        image: 'https://image.tmdb.org/t/p/w342//iZZ8n4jDJb5rDFWu1P0BFOGgCeE.jpg',
        genre: 'Dorama',
        rate: '3.2',
        duration: '1h 10min/ep'
    },
    {
        title: 'Debit Queen',
        image: 'https://image.tmdb.org/t/p/w342//81dohihmlsyrboiJmuTTY368m9R.jpg',
        genre: 'Dorama',
        rate: '4.5',
        duration: '1h 10min/ep'
    },
    {
        title: 'The Whirlwind',
        image: 'https://image.tmdb.org/t/p/w342//niabu7iVMCier4vtIGMR5r5Xm1Y.jpg',
        genre: 'Dorama',
        rate: '3.0',
        duration: '1h 10min/ep'
        
    },
    {
        title: 'Nightmares',
        image: 'https://image.tmdb.org/t/p/w342//a3vJraRkbFf58rWOuzLOR2nMMs3.jpg',
        genre: 'Pelicula',
        rate: '4.0',
        duration: '1h 45min'
    },
    {
        title: 'Death Whisperer',
        image: 'https://image.tmdb.org/t/p/w342//mpt4btkF7YzSM9kldSdBvnAFHCB.jpg',
        genre: 'Pelicula',
        rate: '4.5',
        duration: '1h 45min'
    },
    {
        title: 'A Girl at My Door',
        image: 'https://image.tmdb.org/t/p/w342//4E8vbpncdywziZP63KHAhJxIs3r.jpg',
        genre: 'Pelicula',
        rate: '4.0',
        duration: '1h 45min'
    },
    {
        title: 'Anime Supremacy!',
        image: 'https://image.tmdb.org/t/p/w342//hlom3uDLj2ZM2cHdcA8HWbGm4Sz.jpg',
        genre: 'Pelicula',
        rate: '4.1',
        duration: '1h 45min'
    },
    {
        title: 'No Mercy',
        image: 'https://image.tmdb.org/t/p/w342//3KJVCVADvtZ6esjPWPHObjPMuK4.jpg',
        genre: 'Pelicula',
        rate: '3.6',
        duration: '1h 45min'
        
    },
    {
        title: '18x2 Beyond Youthful Days',
        image: 'https://image.tmdb.org/t/p/w342//nt68WTFgtZdLBwpLBF2q7GFq5Fw.jpg',
        genre: 'Pelicula',
        rate: '3.9',
        duration: '1h 35min'
    },
    {
        title: 'The Night Owl',
        image: 'https://image.tmdb.org/t/p/w342//9zqVvOF7JPRgZIdHKVyQ4sqL5n6.jpg',
        genre: 'Pelicula',
        rate: '4.0',
        duration: '1h 50min'
        
    },

];

contenido.forEach((e, index) => {
    if (e.content === 'episodios') {
        document.getElementById('episodios')
            .innerHTML += `
        <div class="card" style="width: 320px;">
            <img class="card-img-top" src="${e.image}" alt="Card image cap">
            <div class="card-body">
                <p class="card-title">${e.title}</p>
                <p class="card-text">${e.episode}</p>
            </div>
        </div>
    `;
    }
});
contenido.forEach((e, index) => {
    if (e.genre === 'Dorama') {
        document.getElementById('doramas')
            .innerHTML += `
        <div class="card-vertical" style="width: 12rem;">
            <img class="card-img-top" src="${e.image}" alt="Card image cap">
            <div class="card-text">
                <p class="card-title">${e.title}</p>
                <span>${e.genre}</span>
            </div>
        </div>
    `;
    }
});
contenido.forEach((e, index) => {
    if (e.genre === 'Pelicula') {
        document.getElementById('peliculas')
            .innerHTML += `
        <div class="card-vertical" style="width: 12rem;">
            <img class="card-img-top" src="${e.image}" alt="Card image cap">
            <div class="card-text">
                <p class="card-title">${e.title}</p>
                <span>${e.genre}</span>
            </div>
        </div>
    `;
    }
});

/* BUSCADOR*/
let results = document.getElementById('results');
let btnModal = document.getElementById('btn-modal');

btnModal.addEventListener('click', () => {
    console.log('evento on click cargado');


    setTimeout(() => {
        let search = document.getElementById('search');
        search.addEventListener('input', (e) => {
            let input = e.target.value.toLowerCase();
            console.log(input);


            function imprimirResultados(contentData, index) {
                results.innerHTML += `
                    <div class="results">
                        <img class="modal-img" src="${contentData.image}" alt="">
                        <div class="modal-text">
                          <a href="pantalla_peliculas.html?title=${contentData.title}" target="_blank"><h5>${contentData.title}</h5></a>
                          <div class="result-info">
                          <p>${contentData.rate}</p>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg>
                          <p>${contentData.genre}</p>
                          <p>${contentData.duration}</p>
                        </div>
                        </div>
                      </div>
                `;
            }

            function refreshResults() {
                results.innerHTML = "";
                let searchbar = false;
                contenido.forEach((e, index) => {
                    if (e.title.toLowerCase().includes(input) || e.genre.toLocaleLowerCase().includes(input)) {
                        imprimirResultados(e, index);
                        searchbar = true;
                    }
                });
                if (!searchbar) {
                    results.innerHTML = `
                        <div class="results">
                            <p>No se encontraron resultados.</p>
                        </div>
                    `;
                }
            }

            refreshResults();
        });

    }, 500);
});
