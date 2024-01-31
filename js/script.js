const btnChevron = document.querySelector('.contact__form--chevron');
const select = document.querySelector('.contact__form-select');

btnChevron.addEventListener('click', () => {
	select.classList.toggle('show');
});