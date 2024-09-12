'use strict'
let episodios = [
    {
        title: 'Episodio 1',
        image: 'https://s.yimg.com/ny/api/res/1.2/eUJCMp7RadDzKJTSQGh6lg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://media.zenfs.com/en/comingsoon_net_477/c4d0d613cba12f61ba8d0466aced86d2',
        content: 'episodios',
        genre: 'GL',
        duration: '40min/ep'
    },
    {
        title: 'Episodio 2',
        image: 'https://s.yimg.com/ny/api/res/1.2/eUJCMp7RadDzKJTSQGh6lg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://media.zenfs.com/en/comingsoon_net_477/c4d0d613cba12f61ba8d0466aced86d2',
        content: 'episodios',
        genre: 'GL',
        duration: '40min/ep'
    },
    {
        title: 'Episodio 3',
        image: 'https://s.yimg.com/ny/api/res/1.2/eUJCMp7RadDzKJTSQGh6lg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://media.zenfs.com/en/comingsoon_net_477/c4d0d613cba12f61ba8d0466aced86d2',
        content: 'episodios',
        genre: 'GL',
        duration: '40min/ep'
    },
    {
        title: 'Episodio 4',
        image: 'https://s.yimg.com/ny/api/res/1.2/eUJCMp7RadDzKJTSQGh6lg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://media.zenfs.com/en/comingsoon_net_477/c4d0d613cba12f61ba8d0466aced86d2',
        content: 'episodios',
        genre: 'GL',
        duration: '40min/ep'
    },
];
function renderEpisodios() {
    const episodiosContainer = document.getElementById('episodios');
    episodiosContainer.innerHTML = ''; 

    episodios.forEach(episodio => {

        const episodioHTML = `
            <div class="episodio">
                <img src="${episodio.image}" alt="${episodio.title}" />
                <h3>${episodio.title}</h3>
                <p>${episodio.episode}</p>
                <p>Gênero: ${episodio.genre}</p>
                <p>Duração: ${episodio.duration}</p>
                <p>Nota: ${episodio.rate}</p>
            </div>
        `;

        episodiosContainer.innerHTML += episodioHTML;
    });
}

document.addEventListener('DOMContentLoaded', renderEpisodios);

document.addEventListener('DOMContentLoaded', () => {
    const trailerIcon = document.querySelector('.imagotipo--info p ion-icon[name="desktop-outline"]');
  
    if (!trailerIcon) {
        console.error('Trailer icon element not found. Please check the HTML structure.');
        return;
    }
  
    const modal = document.getElementById('trailerModal');
    const closeButton = document.getElementsByClassName('close')[0];
    const iframe = document.querySelector('#trailerModal iframe');
  
    const videoId = 'jYg7FL4yqmo';
  
    const openModal = () => {
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        modal.style.display = 'flex';
    };
  
    const closeModal = () => {
        modal.style.display = 'none';
        iframe.src = ''; 
    };

    trailerIcon.addEventListener('click', openModal);
  

    closeButton.addEventListener('click', closeModal);
  
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});
/*Etiquetas y genero*/
const etiquetas = document.querySelectorAll('.etiqueta');
const generos = document.querySelectorAll('.genero');

etiquetas.forEach(etiqueta => {
  etiqueta.addEventListener('click', () => {
    console.log(`Se ha seleccionado la etiqueta: ${etiqueta.textContent}`);
    etiqueta.classList.add('selected');
  });
});

generos.forEach(genero => {
  genero.addEventListener('click', () => {
    console.log(`Se ha seleccionado el género: ${genero.textContent}`);
  });
});
/*similares*/

