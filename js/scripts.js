/*= Slider =======================================================================================================================================================*/


slider(100,1,'%')
function slider(width, slideCount, value) {
	let slider = document.querySelector('.slider');
	let sliderWrapper = document.querySelector('.slider__wrapper');
	let sliderItem = document.querySelectorAll('.slider__item');

	
	sliderWrapper.style = `width: ${sliderItem.length * width + value};left: 0`
	let current = 0;

	// On pressing arrows
	setInterval(() => {
		current += width;
		if (current > (sliderItem.length - slideCount) * width) {
			current = 0
		}
		sliderWrapper.style = `width: ${sliderItem.length * width + '%'};left: ${-current + '%'}`
	}, 5000);
}

/*========================================================================================================================================================*/

let itemPictures = [
	{
		pic: './img/picture1.jpg',
	},
	{
		pic: './img/picture2.jpg',
	},
	{
		pic: './img/picture3.jpg',
	},
	{
		pic: './img/picture5.jpg',
	},
	{
		pic: './img/picture7.jpg',
	},
]

const images = document.querySelectorAll('.img');

for(i = 0; i < images.length; i++){
	images[i].style.background = `url(${itemPictures[i].pic})`
}

const imageContainer = document.querySelectorAll('.items__cnt');
const imageButton = document.querySelectorAll('.services__link');


imageButton.forEach((button,i) => {
	button.onclick = () => {
		button.children[0].classList.toggle('active')
	};
});

const popUp = document.querySelector('.pop-up');
const contactsButton = document.querySelector('.contacts');
const closePopUp = document.querySelector('.pop-up__close');
let popUpActive;


contactsButton.onclick = () => {
	popUp.style.display = 'flex'
};

closePopUp.onclick = () => {
	popUp.style.display = 'none'
};

