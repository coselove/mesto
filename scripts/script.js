let profileedit = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupclose = document.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__container');

function popupOpen() {
  console.log('PopUp Open');
  popup.classList.add('popup_opened');
} 

profileedit.addEventListener('click', popupOpen);

function popupClose() {
  console.log('PopUp Close');
  popup.classList.remove('popup_opened');
}

popupclose.addEventListener('click', popupClose);

function formSubmitHandler(evt) {
  evt.preventDefault();
  let nameInput = document.querySelector('.popup__input-name');
  let jobInput = document.querySelector('.popup__input-occupation');
  let profiletitle = document.querySelector('.profile__title');
  let profilesubtitle = document.querySelector('.profile__subtitle');

  profiletitle.textContent = nameInput.value;
  profilesubtitle.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler);

popupclose.addEventListener('click', popupClose);




