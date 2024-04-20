const main = document.querySelector('main');

async function getData() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/photos");
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        
        const photos = await res.json();
        const firstPhoto = photos.shift(); 

        const firstImg = document.createElement('img');
        firstImg.src = firstPhoto.url;

        const firstCard = document.querySelector('.card');
        firstCard.appendChild(firstImg);

        const remainingPhotos = photos.slice(0, 9);

        remainingPhotos.forEach(p => {
            const card = document.createElement('div');
            card.className = "card";
            
            const img = document.createElement('img');
            img.src = p.url;

            const titulo = document.createElement('h3');
            titulo.textContent = p.title;

            card.append(img, titulo);
            main.append(card);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getData();
