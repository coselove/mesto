let profileedit = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupclose = document.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__input-text_name');
let jobInput = document.querySelector('.popup__input-text_occupation');
let profiletitle = document.querySelector('.profile__title');
let profilesubtitle = document.querySelector('.profile__subtitle');

function popupOpen() {
  popup.classList.add('popup_opened');
} 

function popupClose() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profiletitle.textContent = nameInput.value;
  profilesubtitle.textContent = jobInput.value;
  popupClose();
}

popupclose.addEventListener('click', popupClose);

profileedit.addEventListener('click', popupOpen);

formElement.addEventListener('submit', formSubmitHandler);

popupclose.addEventListener('click', popupClose);




