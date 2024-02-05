const btnChevron = document.querySelector('.contact__form--chevron');
const select = document.querySelector('.contact__form-select');
const inputChervon = document.querySelector('.contact__form-input--chevron');

btnChevron.addEventListener('click', () => {
	select.classList.toggle('show');
	// inputChervon.classList.toggle('show');
	btnChevron.classList.toggle('icon-rotate');
});
