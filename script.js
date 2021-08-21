const collections = document.querySelectorAll('.book');
const advert = document.querySelector('.adv')
const chapters = collections[0].getElementsByTagName('li');
const chapters1 = collections[5].getElementsByTagName('li');
const chapters2 = collections[2].getElementsByTagName('li');
const bookName = document.getElementsByTagName('a')[4];
const newElem = document.createElement('li');




console.log(newElem);

console.log(collections);
collections[0].before(collections[1]);
collections[5].after(collections[2]);
collections[4].after(collections[3]);

advert.remove();

document.body.style.backgroundImage = 'url(image/you-dont-know-js.jpg)';

bookName.textContent = 'Книга 3. this и Прототипы Объектов';

chapters[3].after(chapters[6]);
chapters[4].after(chapters[8]);
chapters[9].after(chapters[2]);

chapters1[1].after(chapters1[9]);
chapters1[5].after(chapters1[3]);
chapters1[8].after(chapters1[6]);

newElem.textContent = 'Глава 8: За пределами ES6';
chapters2[8].after(newElem);
console.log (collections[2].getElementsByTagName('li'));

