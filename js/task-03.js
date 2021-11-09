const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryListEl = document.querySelector('.gallery');
galleryListEl.style.display = 'flex';
galleryListEl.style.listStyle = 'none';
galleryListEl.style.justifyContent = 'center';

const galleryItemEl = images.map((image) => `<li class="gallery__item"><img class="gallery__image" src = ${image.url} alt = '${image.alt}' width=480px height=320px <li>`
).join("");

galleryListEl.insertAdjacentHTML("afterbegin", galleryItemEl);

const listItems = galleryListEl.querySelectorAll('.gallery__item');
listItems[1].style.margin = '0 10px'